"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const animeList = [
  { id: 1, title: "Naruto", year: 2002, genre: "Action", type: "series" },
  { id: 2, title: "One Piece", year: 1999, genre: "Adventure", type: "series" },
  { id: 3, title: "Your Name", year: 2016, genre: "Romance", type: "movie" },
  // Add more anime entries...
]

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({ genre: "", year: "", type: "" })

  const filteredAnime = animeList.filter(
    (anime) =>
      anime.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filters.genre || anime.genre === filters.genre) &&
      (!filters.year || anime.year.toString() === filters.year) &&
      (!filters.type || anime.type === filters.type),
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">חיפוש אנימה</h1>

      <div className="flex space-x-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="חפש אנימה..."
          className="flex-grow p-2 rounded border dark:bg-gray-700"
        />
        <select
          value={filters.genre}
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
          className="p-2 rounded border dark:bg-gray-700"
        >
          <option value="">כל הז&apos;אנרים</option>
          <option value="Action">אקשן</option>
          <option value="Adventure">הרפתקאות</option>
          <option value="Romance">רומנטיקה</option>
          {/* Add more genre options */}
        </select>
        <select
          value={filters.year}
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          className="p-2 rounded border dark:bg-gray-700"
        >
          <option value="">כל השנים</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more year options */}
        </select>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="p-2 rounded border dark:bg-gray-700"
        >
          <option value="">כל הסוגים</option>
          <option value="series">סדרה</option>
          <option value="movie">סרט</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAnime.map((anime) => (
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
            <p className="text-sm text-gray-600 dark:text-gray-400">ז&apos;אנר: {anime.genre}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">סוג: {anime.type === "series" ? "סדרה" : "סרט"}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

