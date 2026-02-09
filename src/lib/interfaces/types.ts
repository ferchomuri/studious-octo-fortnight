export interface MusicRelease {
  id: string;
  title: string;
  coverImageUrl: string;
  releaseDate: string;
  type: "single" | "ep" | "album";
  streams: number;
}

export interface SalesAnalytics {
  period: string;
  value: number;
}

export interface FanEngagement {
  label: string;
  value: number;
}

export interface HomeData {
  totalStreams: number;
  monthlyListeners: number;
  totalRevenue: number;
  engagementRate: number;
}

export interface TotalSalesData {
  label: string;
  value: number;
  goal: number;
}

export interface SalesPerDay {
  date: string;
  sales: number;
}

export interface ReleasesPerStreams {
  title: string;
  streams: number;
}
