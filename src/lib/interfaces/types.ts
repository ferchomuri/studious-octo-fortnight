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

export interface UserGrowthData {
  date: string;
  totalUsers: number;
  activeUsers: number;
}

export interface DeviceDistributionData {
  device: string;
  count: number;
  fill: string;
}

export interface GeoDistributionData {
  country: string;
  users: number;
}

export interface FollowerGrowthData {
  month: string;
  followers: number;
}

export interface LocationData {
  city: string;
  country: string;
  listeners: number;
  growth: number;
  long: number;
  lat: number;
}

export interface EngagementMetric {
  label: string;
  value: number;
  growth: number;
  icon: string; // Icon name matching Lucide icons
}
