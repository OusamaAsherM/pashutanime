import type { Metadata } from "next"
import { getAnimeInfo, getEpisodeDriveId } from "@/lib/anime"
import EpisodePlayer from "@/components/EpisodePlayer"

type Params = {
  id: string
  episodeNumber: string
}

type PageProps<T = Params> = {
  params: T extends Promise<any> ? T : Promise<T>
  searchParams: Record<string, string | string[] | undefined>
}

export default async function AnimePage({ params }: PageProps) {
  const { id, episodeNumber } = await params

  const animeInfoPromise = getAnimeInfo(id)
  const driveIdPromise = getEpisodeDriveId(id, episodeNumber)

  const [animeInfo, driveId] = await Promise.all([animeInfoPromise, driveIdPromise])

  if (!animeInfo || !driveId) {
    throw new Error("Anime or episode not found")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{animeInfo.title}</h1>
      <p className="mb-4">פרק {episodeNumber}</p>
      <EpisodePlayer animeId={id} episodeNumber={episodeNumber} driveId={driveId} />
    </div>
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id, episodeNumber } = await params
  const animeInfo = await getAnimeInfo(id)

  return {
    title: `${animeInfo?.title ?? "אנימה"} - פרק ${episodeNumber}`,
    description: `צפייה בפרק ${episodeNumber} של ${animeInfo?.title ?? "האנימה"}`,
  }
}

