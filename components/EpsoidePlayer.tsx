interface EpisodePlayerProps {
    animeId: string
    episodeNumber: string
    driveId: string // מזהה הקובץ בגוגל דרייב
  }
  
  export default function EpisodePlayer({ animeId, episodeNumber, driveId }: EpisodePlayerProps) {
    const driveUrl = `https://drive.google.com/file/d/${driveId}/preview`
  
    return (
      <div className="aspect-w-16 aspect-h-9">
        <iframe src={driveUrl} allow="autoplay" className="w-full h-full" allowFullScreen></iframe>
      </div>
    )
  }
  
  