"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon, Menu } from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            PashutAnime
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden md:flex space-x-reverse space-x-4 items-center">
            <Link href="/anime" className="hover:text-primary transition-colors">
              רשימת אנימה
            </Link>
            <Link href="/news" className="hover:text-primary transition-colors">
              חדשות
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              אודות
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              צור קשר
            </Link>
            {mounted && (
              <button onClick={toggleTheme} className="p-2 rounded-full bg-primary text-primary-foreground">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 space-y-2"
        >
          <Link href="/anime" className="block hover:text-primary transition-colors">
            רשימת אנימה
          </Link>
          <Link href="/news" className="block hover:text-primary transition-colors">
            חדשות
          </Link>
          <Link href="/about" className="block hover:text-primary transition-colors">
            אודות
          </Link>
          <Link href="/contact" className="block hover:text-primary transition-colors">
            צור קשר
          </Link>
          {mounted && (
            <button onClick={toggleTheme} className="p-2 rounded-full bg-primary text-primary-foreground">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
        </motion.div>
      </nav>
    </header>
  )
}

