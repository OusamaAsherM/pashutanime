export interface AnimeInfo {
  title: string
  // הוסף שדות נוספים לפי הצורך
}

export function getAnimeInfo(id: string): Promise<AnimeInfo | null> {
  return new Promise((resolve) => {
    // כאן תהיה הלוגיקה האמיתית לקבלת מידע על האנימה
    setTimeout(() => {
      resolve({
        title: `אנימה ${id}`,
        // שדות נוספים
      })
    }, 100)
  })
}

export function getEpisodeDriveId(animeId: string, episodeNumber: string): Promise<string | null> {
  return new Promise((resolve) => {
    // כאן תהיה הלוגיקה האמיתית לקבלת מזהה הקובץ מגוגל דרייב
    setTimeout(() => {
      resolve('your-google-drive-file-id-here')
    }, 100)
  })
}
