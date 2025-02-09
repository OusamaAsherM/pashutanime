import type { Metadata } from "next"
import { getAnimeInfo, getEpisodeDriveId } from "@/lib/anime"
import EpisodePlayer from "@/app/components/EpisodePlayer"

interface PageProps {
  params: {
    id: string
    episodeNumber: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function AnimePage({ params: { id, episodeNumber } }: PageProps) {
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

export async function generateMetadata({ params: { id, episodeNumber } }: PageProps): Promise<Metadata> {
  const animeInfo = await getAnimeInfo(id)

  return {
    title: `${animeInfo?.title ?? "אנימה"} - פרק ${episodeNumber}`,
    description: `צפייה בפרק ${episodeNumber} של ${animeInfo?.title ?? "האנימה"}`,
  }
}

