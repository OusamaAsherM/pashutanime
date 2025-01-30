"use client"

import { useState } from "react"
import Link from "next/link"

const episodeData = {
  id: 1,
  animeId: 1,
  number: 1,
  title: "The Beginning",
  videoUrl: "https://example.com/video.mp4",
  downloadLinks: [
    { resolution: "480p", url: "https://example.com/download/480p" },
    { resolution: "720p", url: "https://example.com/download/720p" },
    { resolution: "1080p", url: "https://example.com/download/1080p" },
  ],
  subtitles: [
    { language: "English", url: "https://example.com/subs/en.vtt" },
    { language: "Spanish", url: "https://example.com/subs/es.vtt" },
  ],
}

interface EpisodeClientProps {
  params: {
    id: string
    episodeNumber: string
  }
}

export default function EpisodeClient({ params }: EpisodeClientProps) {
  const [selectedSubtitle, setSelectedSubtitle] = useState(episodeData.subtitles[0].url)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        פרק {episodeData.number}: {episodeData.title}
      </h1>

      <div className="aspect-w-16 aspect-h-9">
        <video controls className="w-full h-full rounded-lg" src={episodeData.videoUrl}>
          <track kind="subtitles" src={selectedSubtitle} srcLang="en" label="English" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex space-x-4">
        <select
          value={selectedSubtitle}
          onChange={(e) => setSelectedSubtitle(e.target.value)}
          className="p-2 rounded border dark:bg-gray-700"
        >
          {episodeData.subtitles.map((sub) => (
            <option key={sub.language} value={sub.url}>
              {sub.language === "English" ? "אנגלית" : sub.language === "Spanish" ? "ספרדית" : sub.language}
            </option>
          ))}
        </select>

        {episodeData.downloadLinks.map((link) => (
          <a
            key={link.resolution}
            href={link.url}
            className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark transition-colors"
            download
          >
            הורד {link.resolution}
          </a>
        ))}
      </div>

      <div className="flex justify-between">
        <Link
          href={`/anime/${params.id}/episode/${Number(params.episodeNumber) - 1}`}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          לפרק הקודם
        </Link>
        <Link
          href={`/anime/${params.id}/episode/${Number(params.episodeNumber) + 1}`}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          לפרק הבא
        </Link>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">תגובות</h2>
        {/* Implement comment section here */}
        <p>מערכת תגובות תגיע בקרוב...</p>
      </div>
    </div>
  )
}

