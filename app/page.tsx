"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

export default function Home() {
  return (
    <div className="space-y-12 py-12">
      <section className="relative h-[70vh]">
        <Image src="/header.jpg" alt="Featured Anime" layout="fill" objectFit="cover" className="rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ברוכים הבאים ל-PashutAnime
          </motion.h1>
        </div>
      </section>

       <section className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          העלאות אחרונות
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <MotionLink
              href={`/anime/${i}`}
              key={i}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={`/anime-placeholder-${i}.jpg`}
                alt={`Anime ${i}`}
                width={300}
                height={450}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Anime Title {i}</h3>
                <p className="text-sm text-muted-foreground">Episodes: 12</p>
              </div>
            </MotionLink>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          הודעות האתר
        </motion.h2>
        <motion.div
          className="bg-card rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="font-semibold text-xl mb-2">השקת האתר החדש!</h3>
          <p className="text-muted-foreground">ברוכים הבאים לאתר האנימה המשופר שלנו. תיהנו מצפייה והורדה חלקה!</p>
        </motion.div>
      </section>
    </div>
  )
}

