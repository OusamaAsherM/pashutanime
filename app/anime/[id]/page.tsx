import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

// Sample anime data structure
type Episode = {
  number: number
  title: string
}

type Anime = {
  id: number
  title: string
  alternativeNames: string[]
  coverImage: string
  trailer: string
  synopsis: string
  genres: string[]
  episodes: Episode[]
  fansubCredits: string
  translationNotes: string
}

// Anime data array remains the same as provided
const animeData: Anime[] = [
  {
    id: 1,
    title: "Attack on Titan",
    alternativeNames: ["Shingeki no Kyojin"],
    coverImage: "/attack-on-titan.jpg",
    trailer: "https://www.youtube.com/embed/t_n-z-f-Z7s",
    synopsis: "Synopsis for Attack on Titan",
    genres: ["Action", "Fantasy"],
    episodes: [
      { number: 1, title: "Episode 1" },
      { number: 2, title: "Episode 2" },
      { number: 3, title: "Episode 3" },
    ],
    fansubCredits: "Fansub Credits",
    translationNotes: "Translation Notes",
  },
  // Add more anime data here...
]

type PageProps = {
  params: { id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const anime = animeData.find((anime) => anime.id.toString() === params.id)

  return {
    title: anime ? `${anime.title} | פשוט אנימה` : "אנימה לא נמצאה | פשוט אנימה",
    description: anime?.synopsis || "אנימה לא נמצאה",
  }
}

export async function generateStaticParams() {
  return animeData.map((anime) => ({
    id: anime.id.toString(),
  }))
}

async function getAnime(id: string): Promise<Anime | undefined> {
  return animeData.find((anime) => anime.id.toString() === id)
}

export default async function Page({ params }: PageProps) {
  // Ensure params is resolved asynchronously
  const anime = await getAnime(params.id)

  if (!anime) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <h1 className="text-2xl font-bold mb-4">אנימה לא נמצאה</h1>
        <Link href="/" className="text-primary hover:underline">
          חזרה לדף הבית
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:space-x-8 md:space-x-reverse">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src={anime.coverImage || "/placeholder.svg"}
            alt={anime.title}
            width={400}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full"
            priority
          />
        </div>
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold">{anime.title}</h1>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">שמות חלופיים:</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {anime.alternativeNames.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <p className="text-lg leading-relaxed">{anime.synopsis}</p>
          <div>
            <h2 className="text-xl font-semibold mb-3">ז&apos;אנרים:</h2>
            <div className="flex flex-wrap gap-2">
              {anime.genres.map((genre) => (
                <span key={genre} className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">טריילר</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={anime.trailer}
            title={`${anime.title} - Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">פרקים</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {anime.episodes.map((episode) => (
            <Link
              href={`/anime/${anime.id}/episode/${episode.number}`}
              key={episode.number}
              className="block p-4 rounded-lg bg-card hover:bg-accent transition-colors duration-200"
            >
              <div className="font-semibold">פרק {episode.number}</div>
              {episode.title && <div className="text-sm text-muted-foreground mt-1">{episode.title}</div>}
            </Link>
          ))}
        </div>
      </div>

      {(anime.fansubCredits || anime.translationNotes) && (
        <div className="grid gap-6 md:grid-cols-2">
          {anime.fansubCredits && (
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">קרדיטים לפאנסאב</h2>
              <p className="text-muted-foreground">{anime.fansubCredits}</p>
            </div>
          )}
          {anime.translationNotes && (
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">הערות תרגום</h2>
              <p className="text-muted-foreground">{anime.translationNotes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
