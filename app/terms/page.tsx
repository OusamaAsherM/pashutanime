export default function TermsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">תנאי שימוש והצהרת אחריות</h1>

      <section>
        <h2 className="text-2xl font-bold mb-2">הצהרת פאנסאב</h2>
        <p>
          PashutAnime אינה הבעלים של תוכן האנימה המסופק באתר זה. אנחנו קבוצה של מעריצים המתרגמים ומכינים כתוביות לסדרות
          אנימה למטרות חינוכיות וקידום. כל הזכויות על התוכן המקורי שייכות לבעליהן המקוריים.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">מדיניות זכויות יוצרים והסרה</h2>
        <p>
          אנו מכבדים את זכויות הקניין הרוחני של אחרים. אם אתה מאמין שהעבודה המוגנת בזכויות יוצרים שלך הועתקה באופן
          המהווה הפרת זכויות יוצרים, אנא צור איתנו קשר עם המידע הבא:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>תיאור של העבודה המוגנת בזכויות יוצרים שלטענתך הופרה</li>
          <li>כתובת ה-URL של החומר שלטענתך מפר זכויות</li>
          <li>פרטי הקשר שלך</li>
          <li>
            הצהרה שיש לך אמונה בתום לב כי השימוש בחומר באופן שעליו אתה מתלונן אינו מורשה על ידי בעל זכויות היוצרים,
            סוכנו, או החוק
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">כללים לשימוש באתר</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>אין להפיץ מחדש את התוכן המתורגם שלנו ללא אישור</li>
          <li>אין להשתמש בכתוביות שלנו למטרות מסחריות</li>
          <li>כבדו משתמשים אחרים ושמרו על אווירה קהילתית חיובית</li>
          <li>אין לנסות לפרוץ, להזיק או לשבש את פעילות האתר</li>
          <li>השימוש באתר הוא על אחריותך בלבד</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">הגבלת אחריות</h2>
        <p>
          PashutAnime וחברי הצוות שלה לא יישאו באחריות לכל נזק הנובע משימוש באתר זה או בתוכן המסופק בו. איננו מבטיחים את
          הדיוק, השלמות או השימושיות של כל מידע באתר.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">שינויים בתנאים</h2>
        <p>
          אנו שומרים לעצמנו את הזכות לשנות תנאים אלה בכל עת. אנא בדוק דף זה באופן קבוע לעדכונים. המשך השימוש שלך באתר
          לאחר פרסום השינויים מהווה את הסכמתך לתנאים המעודכנים.
        </p>
      </section>

      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">עודכן לאחרונה: 15 ביולי, 2023</p>
    </div>
  )
}

