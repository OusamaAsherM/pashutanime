import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "New Anime Series Added",
    date: "2023-07-15",
    category: "New Releases",
    excerpt: "We've just added the latest hit anime series to our collection...",
  },
  {
    id: 2,
    title: "Website Maintenance Scheduled",
    date: "2023-07-20",
    category: "Site Updates",
    excerpt: "We will be performing scheduled maintenance on our servers...",
  },
  // Add more news items...
]

export default function NewsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">חדשות ועדכונים</h1>

      <div className="space-y-4">
        {newsItems.map((item) => (
          <article key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/news/${item.id}`} className="hover:text-accent">
                {item.title}
              </Link>
            </h2>
            <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>{item.date}</span>
              <span>{item.category}</span>
            </div>
            <p>{item.excerpt}</p>
            <Link href={`/news/${item.id}`} className="text-accent hover:underline mt-2 inline-block">
              קרא עוד
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

