"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const animeList = [
  { id: 1, title: "Anime 1", year: 2023, episodes: 12, status: "Ongoing", genre: "Action" },
  { id: 2, title: "Anime 2", year: 2022, episodes: 24, status: "Completed", genre: "Romance" },
  // Add more anime entries...
]

export default function AnimeList() {
  const [filter, setFilter] = useState({ genre: "", year: "", status: "" })
  const [sort, setSort] = useState("popularity")

  const filteredAnime = animeList.filter(
    (anime) =>
      (!filter.genre || anime.genre === filter.genre) &&
      (!filter.year || anime.year.toString() === filter.year) &&
      (!filter.status || anime.status === filter.status),
  )

  const sortedAnime = [...filteredAnime].sort((a, b) => {
    if (sort === "newest") return b.year - a.year
    if (sort === "alphabetical") return a.title.localeCompare(b.title)
    return 0 // Default to no sorting (popularity)
  })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">רשימת אנימה</h1>

      <div className="flex space-x-4">
        <select
          value={filter.genre}
          onChange={(e) => setFilter({ ...filter, genre: e.target.value })}
          className="p-2 rounded border dark:bg-gray-700"
        >
          <option value="">כל הז&apos;אנרים</option>
          <option value="Action">אקשן</option>
          <option value="Romance">רומנטיקה</option>
          {/* Add more genre options */}
        </select>

        <select
          value={filter.year}
          onChange={(e) => setFilter({ ...filter, year: e.target.value })}
          className="p-2 rounded border dark:bg-gray-700"
        >
          <option value="">כל השנים</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more year options */}
        </select>

        <select
          value={filter.status}
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          className="p-2 rounded border dark:bg-gray-700"
        >
          <option value="">כל הסטטוסים</option>
          <option value="Ongoing">מתמשך</option>
          <option value="Completed">הושלם</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)} className="p-2 rounded border dark:bg-gray-700">
          <option value="popularity">מיין לפי פופולריות</option>
          <option value="newest">מיין לפי החדש ביותר</option>
          <option value="alphabetical">מיין לפי סדר אלפביתי</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedAnime.map((anime) => (
          <Link
            href={`/anime/${anime.id}`}
            key={anime.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <Image
              src={`/anime-placeholder-${anime.id}.jpg`}
              alt={anime.title}
              width={200}
              height={300}
              className="rounded-lg mb-2"
            />
            <h2 className="font-semibold">{anime.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">שנה: {anime.year}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">פרקים: {anime.episodes}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">סטטוס: {anime.status}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

