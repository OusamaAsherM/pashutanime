import Image from "next/image"
import Link from "next/link"

const animeData = {
  id: 1,
  title: "Sample Anime",
  alternativeNames: ["サンプルアニメ", "Anime de Ejemplo"],
  coverImage: "/anime-cover.jpg",
  trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  synopsis: "This is a sample anime synopsis. It tells the story of...",
  genres: ["Action", "Comedy", "Sci-Fi"],
  episodes: [
    { number: 1, title: "The Beginning" },
    { number: 2, title: "The Middle" },
    { number: 3, title: "The End" },
  ],
  fansubCredits: "Translated by: John Doe, Jane Smith",
  translationNotes: "Some cultural references were adapted for clarity.",
}

export default function AnimePage() {
  // In a real app, you'd fetch the anime data based on the ID
  const anime = animeData;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-1/3">
          <Image
            src={anime.coverImage || "/placeholder.svg"}
            alt={anime.title}
            width={300}
            height={450}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-3xl font-bold">{anime.title}</h1>
          <p className="text-gray-600 dark:text-gray-400">שמות חלופיים: {anime.alternativeNames.join(", ")}</p>
          <p>{anime.synopsis}</p>
          <div>
            <h2 className="text-xl font-semibold">ז&apos;אנרים:</h2>
            <div className="flex flex-wrap gap-2">
              {anime.genres.map((genre) => (
                <span key={genre} className="bg-accent text-white px-2 py-1 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">טריילר</h2>
        <iframe
          width="100%"
          height="315"
          src={anime.trailer}
          title="Anime Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">פרקים</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {anime.episodes.map((episode) => (
            <Link
              href={`/anime/${anime.id}/episode/${episode.number}`}
              key={episode.number}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold">פרק {episode.number}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{episode.title}</p>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">קרדיטים לפאנסאב</h2>
        <p>{anime.fansubCredits}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">הערות תרגום</h2>
        <p>{anime.translationNotes}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">תגובות</h2>
        {/* Implement comment section here */}
        <p>מערכת תגובות תגיע בקרוב...</p>
      </div>
    </div>
  )
}

