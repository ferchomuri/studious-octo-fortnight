import { FanEngagement, MusicRelease, SalesAnalytics } from "./types"

export const recentReleases: MusicRelease[] = [
  {
    id: "rel_001",
    title: "Neon Horizon",
    coverImageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    releaseDate: "2024-03-15T00:00:00.000Z",
    type: "single",
  },
  {
    id: "rel_002",
    title: "Midnight Echoes",
    coverImageUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&q=80",
    releaseDate: "2024-02-01T00:00:00.000Z",
    type: "ep",
  },
  {
    id: "rel_003",
    title: "Urban Dreams",
    coverImageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    releaseDate: "2023-11-20T00:00:00.000Z",
    type: "album",
  },
  {
    id: "rel_004",
    title: "Static Waves",
    coverImageUrl: "https://images.unsplash.com/photo-1514525253440-b393452e3383?w=800&q=80",
    releaseDate: "2023-09-10T00:00:00.000Z",
    type: "single",
  },
  {
    id: "rel_005",
    title: "Echoes of Silence",
    coverImageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    releaseDate: "2023-08-05T00:00:00.000Z",
    type: "single",
  },
  {
    id: "rel_006",
    title: "Golden Hour",
    coverImageUrl: "https://images.unsplash.com/photo-1459749411177-0473ef7161a9?w=800&q=80",
    releaseDate: "2023-06-12T00:00:00.000Z",
    type: "ep",
  },
  {
    id: "rel_007",
    title: "Velvet Underground",
    coverImageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
    releaseDate: "2023-04-20T00:00:00.000Z",
    type: "single",
  },
  {
    id: "rel_008",
    title: "Metropolis",
    coverImageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    releaseDate: "2023-01-15T00:00:00.000Z",
    type: "album",
  },
]

export const salesAnalytics: SalesAnalytics[] = [
  { period: "Jan", value: 4500 },
  { period: "Feb", value: 5200 },
  { period: "Mar", value: 4800 },
  { period: "Apr", value: 6100 },
  { period: "May", value: 5900 },
  { period: "Jun", value: 7200 },
  { period: "Jul", value: 6800 },
  { period: "Aug", value: 7500 },
  { period: "Sep", value: 8100 },
  { period: "Oct", value: 7900 },
  { period: "Nov", value: 8500 },
  { period: "Dec", value: 9200 },
]

export const fanEngagement: FanEngagement[] = [
  { label: "Total Followers", value: 12500 },
  { label: "Monthly Listeners", value: 45000 },
  { label: "Engagement Rate", value: 5.8 },
  { label: "New Subscribers", value: 320 },
  { label: "Playlist Adds", value: 1850 },
  { label: "Shares", value: 420 },
]
