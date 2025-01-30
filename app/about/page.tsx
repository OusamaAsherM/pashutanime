import Image from "next/image"

const teamMembers = [
  { name: "John Doe", role: "Translator", avatar: "/avatar-1.jpg" },
  { name: "Jane Smith", role: "Editor", avatar: "/avatar-2.jpg" },
  { name: "Mike Johnson", role: "Typesetter", avatar: "/avatar-3.jpg" },
  // Add more team members...
]

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">אודותינו</h1>

      <section>
        <h2 className="text-2xl font-bold mb-2">המשימה שלנו</h2>
        <p>
          ב-PashutAnime, המשימה שלנו היא להביא את תוכן האנימה הטוב ביותר למעריצים בכל העולם. אנו מאמינים בכוח של סיפור
          סיפורים ובחילופי התרבות הייחודיים שהאנימה מספקת. צוות המתנדבים המסור שלנו עובד ללא לאות כדי לתרגם ולכתוב
          כתוביות לסדרות האנימה האחרונות והטובות ביותר, ומבטיח שמחסומי השפה לא יעמדו בדרך להנאה מסיפורים מדהימים אלה.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">הצוות שלנו</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center">
              <Image
                src={member.avatar || "/placeholder.svg"}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">צור קשר</h2>
        <p>
          יש לכם שאלות או רוצים להיות מעורבים? צרו איתנו קשר ב:
          <a href="mailto:contact@pashutanime.com" className="text-accent hover:underline mr-1">
            contact@pashutanime.com
          </a>
        </p>
        <p className="mt-2">
          הצטרפו לקהילה שלנו בדיסקורד:
          <a
            href="https://discord.gg/pashutanime"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline mr-1"
          >
            https://discord.gg/pashutanime
          </a>
        </p>
      </section>
    </div>
  )
}

