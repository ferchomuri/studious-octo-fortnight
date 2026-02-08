export interface MusicRelease {
  id: string
  title: string
  coverImageUrl: string
  releaseDate: string
  type: "single" | "ep" | "album"
}

export interface SalesAnalytics {
  period: string
  value: number
}

export interface FanEngagement {
  label: string
  value: number
}
