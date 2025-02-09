import { generateStaticParams } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// נתונים דוגמתיים עבור האנימה
const animeData = [
  {
    id: 1,
    title: "השכנה המלאכית מפנקת אותי",
    alternativeNames: ["רומא'גי: Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken", "אנגלית: The Angel Next Door Spoils Me Rotten"],
    coverImage: "/anime-placeholder-1.jpg",
    trailer: "https://www.youtube.com/embed/s_6yBJo3RTI",
    synopsis: "לא סתם מהירו שיינה זכתה בתואר 'המלאכית'. מהירו היא נערה יפיפיה, אתלטית ובעלת הציונים הכי גבוהים בשכבה. היא חיה בעולם שונה משל אמנה פוג'ימיה, תלמיד באותה שכבה ושכן שלה. למרות היותם שכנים, הם אף פעם לא דיברו בניהם, אך השתיקה בניהם נשברה כאשר ביום גשום וסוער אמנה ראה את מהירו יושבת לבדה על נדנדה בגשם",
    genres: ["חיי בית ספר", "רומנטיקה", "חלק מהחיים", "קומדיה"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  {
    id: 2,
    title: "עלמת חושך עם אמנזיה",
    alternativeNames: ["רומא'גי: Tasogare Otome x Amnesia", "אנגלית: Dusk Maiden of Amnesia"],
    coverImage: "/anime-placeholder-2.jpg",
    trailer: "https://www.youtube.com/embed/ssj331-nEUk",
    synopsis: "אקדמיית סיקיו, בית הספר הפרטי, מכיל בתוכו תעולמה מיסתורית. במשך 60 שנה, בית הספר נרדף על ידי רוח רפאים המבוססת על ילדה בשם יוקו קאנוה. יוקו נהרגה בדרך מיסתורית במרתף שמעליו נבנה בית הספר שניצב כיום. ללא זיכרון שנותר לה מחייה או ממותה, יוקו החליטה להקים את מועדון חקר העל-טבעי כדי לגלות על עברה. בפגישה מקרית, תלמיד בית הספר בשם טייצ'י ניה פוגש ביוקו, אשר מתחילים להתחבר זה עם זה בעת פגישתם. יחד עם קיריה קאנוה, קרובת משפחה רחוקה של יוקו, ותלמידה נוספת בשם מומואה אוקונוגי, ביחד הם חוקרים את תעלומות בית הספר כדי לגלות על עברה של הילדה שנהרגה בצורה מיסתורית",
    genres: ["אקשן", "אימה", "מיסתורין", "רומנטיקה", "על-טבעי","אצי'"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  {
    id: 3,
    title: "נולד מחדש כדי לשלוט בלהב, ממלך גיבור לנושאת כלים יוצאת דופן",
    alternativeNames: ["רומא'גי: Eiyuu-ou, Bu wo Kiwameru Tame Tenseisu: Soshite, Sekai Saikyou no Minarai Kish", "אנגלית: Reborn to Master the Blade: From Hero-King to Extraordinary Squire"],
    coverImage: "/anime-placeholder-3.jpg",
    trailer: "https://www.youtube.com/embed/yiU1Eb0PRvY",
    synopsis: "אחרי שמשאלתו התקבלה, אינגליס מצא את עצמו נולד מחדש בתור בת למשפחת אצולה בעתיד הרחוק. לאחר שעברו כמה שנים, אינגליס מגלה שהיא חסרת רונה ולא יכולה להשתמש בחפצי קסם כדי להפוך לאבירה. למרות זאת, אינגליס מחליטה להפוך לנושאת כלים עבור בת דוד שלה כדי שתוכל להתמודד עם המגבלות שלה. בחיים חדשים, בהם האתגרים דומים אך העולם השתנה, איך תצליח אינגליס להתמודד? האם היא תצליח להשלים את כישוריה בחרב?",
    genres: ["אקשן", "פנטזיה", "קומדיה","הרפתקאות"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  {
    id: 4,
    title: "המהפכה הקסומה של הנסיכה שנולדה מחדש והגברת הצעירה הגאונה",
    alternativeNames: ["רומא'גי: The Magical Revolution of the Reincarnated Princess and the Genius Young Lady", "אנגלית: Tensei Oujo to Tensai Reijou no Mahou Kakumei"],
    coverImage: "/anime-placeholder-4.jpg",
    trailer: "https://www.youtube.com/embed/POBnqZeaO6s",
    synopsis: "הנסיכה אניספיה 'אניס' ווין פאלטיה תמיד חלמה לעוף בשמיים, למרות שאנשי ממלכתה רואים בשאיפה זו כדבר מטופש. בנוסף על כך, אניס אינה מסוגלת להשתמש בקסם למרות מעמדה האצילית. אמנם היא לא מסרבת לוותר על החלום, היא מוותרת על מעמדה האצילי, ומתמקדת בפיתוח 'קסם מדעי' על ידי שילוב משאבים שונים עם ידע מחייה הקודמים על פני כדור הארץ.",
    genres: ["פנטזיה", "רומנטיקה"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },

  {
    id: 5,
    title: "המלאכית הטיפשה רוקדת עם השד",
    alternativeNames: ["רומא'גי: Oroka na Tenshi wa Akuma to Odoru", "אנגלית: The Foolish Angel Dances with the Devil"],
    coverImage: "/anime-placeholder-5.jpg",
    trailer: "https://www.youtube.com/embed/YghogHGV7yQ",
    synopsis: "במלחמה שמתרחשת בין השדים מהגיהנום והמלאכים מגן העדן, השדים נמצאים במצב קריסה. כניסיון אחרון לשנות את כף המאזניים, השדים שולחים את אקוטסו מאסטורה למימד בני האדם בכדור הארץ כדי להציל את מולדתם מהמלאכים. הוא מתחזה לתלמיד תיכון ומחפש אדם כריזמטי שיוביל את השדים אל הניצחון. בין חבריו לכיתה של אקוטסו, הוא מכיר את אמאנה לילי, שמצא בה את התכונות שהוא מחפש למשימה שלו. לאחר שהוא מנסה לגייס אותה, מתברר כי היא מלאכית ויכול להיות שעשה את הטעות הכי גדולה במלחמה שלו. ויותר גרוע, הוא עלול להתאהב באויב הכי גרוע שלו",
    genres: ["רומנטיקה", "פנטזיה", "על-טבעי"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  {
    id: 6,
    title: "שקרן שקרן",
    alternativeNames: ["רומא'גי: Liar Liar", "אנגלית: Liar Liar"],
    coverImage: "/anime-placeholder-6.jpg",
    trailer: "https://www.youtube.com/embed/kpCoKa7upZs",
    synopsis: "This is another anime synopsis. It tells a different story...",
    genres: ["Adventure", "Drama", "Fantasy"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  {
    id: 7,
    title: "ברמן: כוס האל",
    alternativeNames: ["רומא'גי: Bartender: Kami no Glass", "אנגלית: BARTENDER Glass of God"],
    coverImage: "/anime-placeholder-7.jpg",
    trailer: "https://www.youtube.com/embed/_W6NvAGLovQ",
    synopsis: "הסדרה מספרת על בר מיסתורי בטוקיו בשם 'פרוזדור עדן' בו עובד הברמן ריו סאסאקורה. 'פרוזדור עדן' הוא לא סתם עוד בר וריו לא עוד סתם ברמן. ב'פרוזדור עדן' אתה לא מוצא את הבר, הבר מוצא אותך. כל לקוח מגיע עם הצרות והדאגות שלו לבר ומקבל את המשקה המושלם עבורו שנעשה בידי הברמן המיסתורי שיודע לתת נחמה ושקט לכל מי שמתיישב מולו.",
    genres: ["דרמה", "חלק מהחיים"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  {
    id: 8,
    title: "אליה סאן מסתירה את הרגשות שלה ברוסית",
    alternativeNames: ["רומא'גי: Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san", "אנגלית: Alya Sometimes Hides Her Feelings in Russian"],
    coverImage: "/anime-placeholder-8.jpg",
    trailer: "https://www.youtube.com/embed/3WSYXiQ7I4k",
    synopsis: "אליסה מיכאילובנה קוג'ו שהיא גם חצי רוסיה וחצי יפנית נחשבת לאלילה בבית הספר שלה. עם שיערה הכסוף, עיניה הכחולות ועורה הבהיר, היא כבשה את לבבם של אינספור תלמידים. למרות זאת, בשל דמותה שנראית בלתי נגישה, כולם סביבה נשארים כזרים. אחד היוצאים מן הכלל הוא חבר לספסל הלימודים של אליסה, מאסאצ'יקה קוזה, ילד ממוצע שמבלה את חייו בצפייה באנימה ובמשחקי גאצ'ה. למרות האופי שלו, מאסאצ'יקה הוא התלמיד היחיד שקיבל את תשומת ליבה של אליסה. ללא יכולת להיות כנה, אליסה לפעמים מתנהגת כלפיו בחומרה ומפגינה את חיבתה רק ברוסית. עם זאת, אין לה מושג שמאסאצ'יקה באמת מבין את השפה שלה.",
    genres: ["קומדיה", "רומנטיקה", "חלק מהחיים"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  {
    id: 9,
    title: "סופר קאב",
    alternativeNames: ["רומא'גי: Super Cub", "אנגלית: Super Cub"],
    coverImage: "/anime-placeholder-9.jpg",
    trailer: "https://www.youtube.com/embed/VUqvUfnsClM",
    synopsis: "יש חירות בבדידות, וקוגומה מוצאת אותה על קטנוע. קטנוע הונדה סופר קאב, ליתר דיוק. ללא הורים, חברים או תכניות לעתיד, ההרפתקאות היומיומיות שלה בדרכה לבית הספר הופכות למקור היחיד שלה להתרגשות. עד שיום אחד, היא מגלה שלחברתה לכיתה, רייקו, יש את אותה תשוקה. יחד, הן יגלו חברות, כיף והרפתקה בדרכים הפתוחות.",
    genres: ["חלק מהחיים"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  {
    id: 10,
    title: "אוזומאקי",
    alternativeNames: ["רומא'גי: Uzumaki", "אנגלית: Uzumaki"],
    coverImage: "/anime-placeholder-10.jpg",
    trailer: "https://www.youtube.com/embed/2ivmweJQaco",
    synopsis: "קורוזו-צ'ו, עיירה קטנה ושקטה ששוכנת ליד אחד מחופי יפן, היא עיר מקוללת. שואיצ'י סאיטו, בן זוגה של נערה בשם קירי גושימה, חושב שהעיירה שלהם נרדפת, אך לא בידי אדם או ישות אלא בידי דפוס: האוזומאקי, הספירלה, הצורה המסתורית המהפנטת. היא באה לידי ביטוי בדברים הקטנים, בקונכיות, במים, באוויר, ואפילו בגוף שלנו ואף באובססיה של אבא של שואיצ'י עם ספירלות. השיגעון מתפשט לו, ותושבי קורוזו-צ'ו נשאבים ונסחבים אל הספירלות כמו אל תוך מערבולת מים שאין ממנה דרך חזרה.",
    genres: ["אימה", "מיסתורין", "על-טבעי"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  {
    id: 11,
    title: "הנער החולם רוצה להיות מציאותי",
    alternativeNames: ["רומא'גי: Yumemiru Danshi wa Genjitsushugisha", "אנגלית: The Dreaming Boy is a Realist"],
    coverImage: "/anime-placeholder-11.jpg",
    trailer: "https://www.youtube.com/embed/Um9JT_tNAwk",
    synopsis: "סאג'ו וואטרו מאוהב בחברתו לכיתה, נאטסוקוואה אייקה, והוא לא מפסיק לנסות להתקרב אליה, למרות שהיא ניראת אדישה אליו. יום אחד, וואטרו מחליט שהיא 'טובה מדי' בשבילו ומתחיל להתרחק ממנה. להפתעתה של אייקה, היא לא מבינה למה הוא פתאום מתרחק ותוהה אם הוא כבר לא מעוניין בה. כך מתחילה לה קומדייה רומנטית על שני תלמידים שמתקשים לתקשר את רגשותיהם ומבינים את הכוונות זה של זו בצורה שגויה, מה שמוביל לסדרת אי הבנות מצחיקה",
    genres: ["קומדיה", "רומנטיקה", "חלק מהחיים"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  {
    id: 12,
    title: "חייה של המוציאה להורג",
    alternativeNames: ["רומא'גי: Shokei Shoujo no Virgin Road", "אנגלית: The Executioner and Her Way of Life"],
    coverImage: "/anime-placeholder-12.jpg",
    trailer: "https://www.youtube.com/embed/Gr0bmbkQH5k",
    synopsis: "כשהמטיילים הבין-ממדיים מארץ אחרת בשם 'יפן' מופיעים, הם לרוב מביאים איתם מוות והרס. על המוציאים להורג כמו מנואו לעקוב אחרי 'האבודים' ולחסל אותם לפני שיגרמו להרס. כשמנואו נתקלת ב'אבודה' אקארי, זה נראה כמו עבודה רגילה... עד שמנואו מגלה שלאקארי יש את היכולת לרמות את המוות. למרות זאת, למנואו יש עבודה לעשות, והיא מחוייבת למשימתה כמוציאה להורג, גם אם הרגשות החדשים שלה מתחילים להתעורר בדרך",
    genres: ["אקשן", "דרמה", "פנטזיה"],
    episodes: [
      { number: 1, title: "" },
      { number: 2, title: "" },
      { number: 3, title: "" },
      { number: 4, title: "" },
      { number: 5, title: "" },
      { number: 6, title: "" },
      { number: 7, title: "" },
      { number: 8, title: "" },
      { number: 9, title: "" },
      { number: 10, title: "" },
      { number: 11, title: "" },
      { number: 12, title: "" },
    ],
    fansubCredits: "",
    translationNotes: "",
  },
  // אנימות נוספות
]

export const generateStaticParams = () => {
  // יצירת נתיבים לכל האנימות, אחד עבור כל id
  return animeData.map((anime) => ({
    id: anime.id.toString(),
  }))
}

export default async function AnimePage({ params }: { params: { id: string } }) {
  // טוען את האנימה הספציפית לפי ה-ID
  const anime = animeData.find((anime) => anime.id.toString() === params.id)

  if (!anime) {
    return <div>אנימה לא נמצאה</div>
  }

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

