import { Suspense } from "react"
import EpisodeClient from "./episode-client"

interface PageProps {
  params: {
    id: string
    episodeNumber: string
  }
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EpisodeClient params={params} />
    </Suspense>
  )
}

