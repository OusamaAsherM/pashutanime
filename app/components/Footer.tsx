import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2023 PashutAnime. כל הזכויות שמורות.</p>
          <nav className="space-x-reverse space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              תנאי שימוש
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              מדיניות פרטיות
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

