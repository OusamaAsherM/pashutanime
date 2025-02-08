"use client"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">צור קשר</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            שם
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border dark:bg-gray-700"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            אימייל
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border dark:bg-gray-700"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">
            הודעה
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-2 rounded border dark:bg-gray-700"
          ></textarea>
        </div>
        <button type="submit" className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark transition-colors">
          שלח הודעה
        </button>
      </form>

      <section>
        <h2 className="text-2xl font-bold mb-2">שאלות נפוצות</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">ש: איך אני יכול לבקש אנימה חדשה לתרגום?</h3>
            <p>
              ת: אתה יכול להשתמש בטופס יצירת הקשר שלנו כדי לשלוח את בקשתך. נבחן אותה ונשקול להוסיף אותה לפרויקטים
              העתידיים שלנו.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">ש: באיזו תדירות אתם משחררים פרקים חדשים?</h3>
            <p>
              ת: לוח הזמנים שלנו משתנה בהתאם לאנימה ולזמינות הצוות שלנו. בדרך כלל אנו שואפים לשחרר פרקים חדשים תוך 24-48
              שעות מהשידור המקורי.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">ש: האם אני יכול להצטרף לצוות הפאנסאב שלכם?</h3>
            <p>ת: אנחנו תמיד מחפשים מתנדבים נלהבים! אנא פנו אלינו דרך טופס יצירת הקשר עם הכישורים והניסיון שלכם.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">התחברו איתנו</h2>
        <p>עקבו אחרינו ברשתות החברתיות לעדכונים האחרונים:</p>
        <div className="flex space-x-4 mt-2">
          <a style={{color: "white"}}
            href="https://discord.com/invite/EHrFVCrG5Q"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Discord
          </a>
        </div>
      </section>
    </div>
  )
}

