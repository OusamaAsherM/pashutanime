"use client"
import { useParams } from "next/navigation"
import Link from "next/link"

// Episodes array – include your full episodes data here.
// For brevity, only a few entries are shown; replace this with your full data.
const episodes = [
  {
    id: 1,
    animeId: 1,
    number: 1,
    title: "Episode 1",
    videoUrl: "https://drive.google.com/file/d/1AkHj8M2s-2WfQcHxGk-AN97fvJ_qrpV7/preview",
  },
  {
    id: 2,
    animeId: 1,
    number: 2,
    title: "Episode 2",
    videoUrl: "https://drive.google.com/file/d/1ydBAr8iyky76hkTJywm_M9WZ5_UJDb6v/preview",
  },
  {
    id: 3,
    animeId: 1,
    number: 3,
    title: "Episode 3",
    videoUrl: "https://drive.google.com/file/d/1XJQ8336-hn961UwwXXYIa41YaDqd5kOZ/preview",
  },
  // ... add all your episode objects here ...
]

export default function EpisodeClient() {
  const params = useParams()

  // Narrow the type for params.id
  const idStr =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
      ? params.id[0]
      : ""
  // Narrow the type for params.episodeNumber
  const episodeNumberStr =
    typeof params.episodeNumber === "string"
      ? params.episodeNumber
      : Array.isArray(params.episodeNumber)
      ? params.episodeNumber[0]
      : ""

  const animeId = Number.parseInt(idStr, 10)
  const episodeNumber = Number.parseInt(episodeNumberStr, 10)

  if (isNaN(animeId) || isNaN(episodeNumber)) {
    return (
      <p className="text-red-500 text-xl font-bold">
        מספר האנימה או הפרק אינו תקין
      </p>
    )
  }

  const episode = episodes.find(
    (ep) => ep.animeId === animeId && ep.number === episodeNumber
  )

  if (!episode) {
    return (
      <p className="text-red-500 text-xl font-bold">
        פרק {episodeNumberStr} לא נמצא עבור אנימה זו
      </p>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-center">
        פרק {episode.number}: {episode.title}
      </h1>

      <div className="w-full max-w-5xl aspect-video min-h-[400px] flex justify-center">
        <iframe
          src={episode.videoUrl}
          allow="autoplay"
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>

      <div className="flex justify-between w-full max-w-5xl">
        {episodeNumber > 1 && (
          <Link
            href={`/anime/${idStr}/episode/${episodeNumber - 1}`}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            לפרק הקודם
          </Link>
        )}
        {episodes.some((ep) => ep.animeId === animeId && ep.number === episodeNumber + 1) && (
          <Link
            href={`/anime/${idStr}/episode/${episodeNumber + 1}`}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            לפרק הבא
          </Link>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2 text-center">תגובות</h2>
        <p>מערכת תגובות תגיע בקרוב...</p>
      </div>
    </div>
  )
}
