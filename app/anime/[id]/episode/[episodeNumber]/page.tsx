"use client"
import { Suspense } from "react"
import EpisodeClient from "./episode-client"

interface PageProps {
  params: {
    id: string
    episodeNumber: string
  }
}

const animeList = [
  { id: 1, title: "השכנה המלאכית מפנקת אותי", year: 2023, episodes: 12, status: "הושלם", genre: "Romance" },
  { id: 2, title: "עלמת חושך עם אמנזיה", year: 2012, episodes: 12, status: "הושלם", genre: "Romance" },
  { id: 3, title: "נולד מחדש כדי לשלוט בלהב, ממלך גיבור לנושאת כלים יוצאת דופן", year: 2023, episodes: 12, status: "הושלם", genre: "Action" },
  { id: 4, title: "המהפכה הקסומה של הנסיכה שנולדה מחדש והגברת הצעירה הגאונה", year: 2023, episodes: 12, status: "הושלם", genre: "Action" },
  { id: 5, title: "המלאכית הטיפשה רוקדת עם השד", year: 2024, episodes: 12, status: "הושלם", genre: "Action" },
  { id: 6, title: "שקרן שקרן", year: 2023, episodes: 12, status: "הושלם", genre: "Action" },
  { id: 7, title: "ברמן: כוס האל", year: 2024, episodes: 12, status: "הושלם", genre: "Action" },
  { id: 8, title: "אליה סאן מסתירה את הרגשות שלה ברוסית", year: 2024, episodes: 12, status: "הושלם", genre: "Action" },
  { id: 9, title: "סופר קאב", year: 2021, episodes: 12, status: "הושלם", genre: "Action" },
  { id: 10, title: "אוזומאקי", year: 2024, episodes: 4, status: "הושלם", genre: "Action" },
  { id: 11, title:"הנער החולם רוצה להיות מציאותי", year: 2023, episodes: 12, status: "הושלם", genre: "Action" },
  { id: 12, title: "חייה של המוציאה להורג", year: 2022, episodes: 12, status: "פעיל", genre: "Action" },
  // ... (update other anime entries)
]

export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EpisodeClient params={params} animeList={animeList} />
    </Suspense>
  )
}

