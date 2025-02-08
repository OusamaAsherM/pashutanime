"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { p } from "framer-motion/m"

const animeList = [
  { id: 1, title: "השכנה המלאכית מפנקת אותי", year: 2023, episodes: 12, status: "הושלם", genre: "רומנטיקה", genre: "חיי בית ספר", genre: "חלק מהחיים", genre: "קומדיה"},
  { id: 2, title: "עלמת חושך עם אמנזיה", year: 2012, episodes: 12, status: "הושלם", genre: "אקשן", genre: "אימה", genre: "מיסתורין", genre: "רומנטיקה", genre: "על טבעי", genre: "אצ'י", },
  { id: 3, title: "נולד מחדש כדי לשלוט בלהב, ממלך גיבור לנושאת כלים יוצאת דופן", year: 2023, episodes: 12, status: "הושלם", genre: "אקשן", genre: "פנטזיה", genre: "קומדיה", genre: "הרפתקאות" },
  { id: 4, title: "המהפכה הקסומה של הנסיכה שנולדה מחדש והגברת הצעירה הגאונה", year: 2023, episodes: 12, status: "הושלם", genre: "רומנטיקה", genre: "פנטזיה" },
  { id: 5, title: "המלאכית הטיפשה רוקדת עם השד", year: 2024, episodes: 12, status: "הושלם", genre: "רומנטיקה", genre: "פנטזיה", genre: "על-טבעי" },
  { id: 6, title: "שקרן שקרן", year: 2023, episodes: 12, status: "הושלם", genre: "פסיכולוגי", genre: "רומנטיקה" },
  { id: 7, title: "ברמן: כוס האל", year: 2024, episodes: 12, status: "הושלם", genre: "דרמה", genre: "חלק מהחיים" },
  { id: 8, title: "אליה סאן מסתירה את הרגשות שלה ברוסית", year: 2024, episodes: 12, status: "הושלם", genre: "קומדיה", genre: "רומנטיקה", genre: "חלק מהחיים" },
  { id: 9, title: "סופר קאב", year: 2021, episodes: 12, status: "הושלם", genre: "חלק מהחיים" },
  { id: 10, title: "אוזומאקי", year: 2024, episodes: 4, status: "הושלם", genre: "דרמה", genre: "אימה", genre: "מיסתורין", genre: "על-טבעי" },
  { id: 11, title:"הנער החולם רוצה להיות מציאותי", year: 2023, episodes: 12, status: "הושלם", genre: "קומדיה", genre: "רומנטיקה" , genre: "חלק מהחיים"  },
  { id: 12, title: "חייה של המוציאה להורג", year: 2022, episodes: 12, status: "פעיל", genre: "אקשן", genre: "הרפתקאות", genre: "דרמה", genre: "פנטזיה" },
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

      <div className="flex space-x-4" style={{justifyContent: "space-evenly"}}>
        <select
          value={filter.genre}
          onChange={(e) => setFilter({ ...filter, genre: e.target.value })}
          className="p-2 rounded border dark:bg-gray-700"
        >
          <option value="">כל הז&apos;אנרים</option>
          <option value="אקשן">אקשן</option>
          <option value="רומנטיקה">רומנטיקה</option>
          <option value="קומדיה">קומדיה</option>
          <option value="חיי בית ספר">חיי בית ספר</option>
          <option value="חלק מהחיים">חלק מהחיים</option>
          <option value="דרמה">דרמה</option>
          <option value="פנטזיה">פנטזיה</option>
          <option value="על-טבעי">על-טבעי</option>
          <option value="אימה">אימה</option>
          {/* Add more genre options */}
        </select>

        <select
          value={filter.year}
          onChange={(e) => setFilter({ ...filter, year: e.target.value })}
          className="p-2 rounded border dark:bg-gray-700"
        >
          <option value="">כל השנים</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2012">2012</option>
          {/* Add more year options */}
        </select>

        <select
          value={filter.status}
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          className="p-2 rounded border dark:bg-gray-700"
        >
          <option value="">כל הסטטוסים</option>
          <option value="פעיל">פעיל</option>
          <option value="הושלם">הושלם</option>
          <option value="הוקפא">הוקפא</option>
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
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md align-content-center justify-items-center p-4 hover:shadow-lg transition-shadow "
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

