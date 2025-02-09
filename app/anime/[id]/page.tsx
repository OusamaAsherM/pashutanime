import Image from 'next/image';
import Link from 'next/link';

// נתוני האנימה
const animeData = [
  {
    id: 1,
    title: "השכנה המלאכית מפנקת אותי",
    alternativeNames: ["Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken", "The Angel Next Door Spoils Me Rotten"],
    coverImage: "/anime-placeholder-1.jpg",
    trailer: "https://www.youtube.com/embed/s_6yBJo3RTI",
    synopsis: "לא סתם מהירו שיינה זכתה בתואר 'המלאכית'...",
    genres: ["חיי בית ספר", "רומנטיקה", "חלק מהחיים", "קומדיה"],
    episodes: Array.from({ length: 12 }, (_, i) => ({ number: i + 1, title: "" })),
    fansubCredits: "",
    translationNotes: "",
  },
  // ניתן להוסיף כאן עוד אנימות...
];

// פונקציה ליצירת דפים סטטיים לכל אנימה
export function generateStaticParams() {
  return animeData.map((anime) => ({ id: anime.id.toString() }));
}

// קומפוננטת דף האנימה
export default function AnimePage({ params }) {
  const { id } = params;
  const anime = animeData.find((a) => a.id.toString() === id);

  if (!anime) {
    return <h1>אנימה לא נמצאה 😢</h1>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{anime.title}</h1>
      <h2 className="text-xl text-gray-500">{anime.alternativeNames.join(" / ")}</h2>
      <div className="mt-4 flex flex-col md:flex-row">
        <Image src={anime.coverImage} alt={anime.title} width={300} height={450} className="rounded-md shadow-lg" />
        <div className="md:ml-6">
          <iframe width="560" height="315" src={anime.trailer} title="טריילר" allowFullScreen className="rounded-md shadow-md"></iframe>
        </div>
      </div>
      <p className="mt-4 text-lg">{anime.synopsis}</p>
      <h3 className="text-2xl font-semibold mt-4">ז'אנרים</h3>
      <p>{anime.genres.join(", ")}</p>
      <h3 className="text-2xl font-semibold mt-4">פרקים</h3>
      <ul className="list-disc pl-5">
        {anime.episodes.map((ep) => (
          <li key={ep.number}>פרק {ep.number} - {ep.title || "ללא שם"}</li>
        ))}
      </ul>
    </div>
  );
}
