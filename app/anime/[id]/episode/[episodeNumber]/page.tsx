import type { Metadata } from "next"
import { use } from "react"
import { getAnimeInfo, getEpisodeDriveId } from "@/lib/anime"
import EpisodePlayer from "@/components/EpisodePlayer"

type PageProps = {
  params: Promise<{
    id: string
    episodeNumber: string
  }>
  searchParams: Record<string, string | string[] | undefined>
}

export default function AnimePage({ params }: PageProps) {
  const { id, episodeNumber } = use(params)
  const animeInfo = use(getAnimeInfo(id))
  const driveId = use(getEpisodeDriveId(id, episodeNumber))

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

