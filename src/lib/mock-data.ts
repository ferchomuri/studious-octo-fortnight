import {
  FanEngagement,
  HomeData,
  MusicRelease,
  ReleasesPerStreams,
  SalesAnalytics,
  SalesPerDay,
  TotalSalesData,
} from "./interfaces/types";

export const recentReleases: MusicRelease[] = [
  {
    id: "rel_001",
    title: "Neon Horizon",
    coverImageUrl:
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    releaseDate: "2024-03-15T00:00:00.000Z",
    type: "single",
    streams: 2400000,
  },
  {
    id: "rel_002",
    title: "Midnight Echoes",
    coverImageUrl:
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&q=80",
    releaseDate: "2024-02-01T00:00:00.000Z",
    type: "ep",
    streams: 5800000,
  },
  {
    id: "rel_003",
    title: "Urban Dreams",
    coverImageUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    releaseDate: "2023-11-20T00:00:00.000Z",
    type: "album",
    streams: 3200000,
  },
  {
    id: "rel_004",
    title: "Static Waves",
    coverImageUrl:
      "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=800&q=80",
    releaseDate: "2023-09-10T00:00:00.000Z",
    type: "single",
    streams: 1900000,
  },
  {
    id: "rel_005",
    title: "Echoes of Silence",
    coverImageUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    releaseDate: "2023-08-05T00:00:00.000Z",
    type: "single",
    streams: 850000,
  },
  {
    id: "rel_006",
    title: "Golden Hour",
    coverImageUrl:
      "https://images.unsplash.com/photo-1696642575644-834089020c0d?w=800&q=80",
    releaseDate: "2023-06-12T00:00:00.000Z",
    type: "ep",
    streams: 4100000,
  },
  {
    id: "rel_007",
    title: "Velvet Underground",
    coverImageUrl:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
    releaseDate: "2023-04-20T00:00:00.000Z",
    type: "single",
    streams: 1200000,
  },
  {
    id: "rel_008",
    title: "Metropolis",
    coverImageUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    releaseDate: "2023-01-15T00:00:00.000Z",
    type: "album",
    streams: 6700000,
  },
  {
    id: "rel_009",
    title: "Solar Flare",
    coverImageUrl:
      "https://images.unsplash.com/photo-1682951822164-f9f0a533b743?w=800&q=80",
    releaseDate: "2023-01-01T00:00:00.000Z",
    type: "single",
    streams: 950000,
  },
  {
    id: "rel_010",
    title: "Lost in Translation",
    coverImageUrl:
      "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=800&q=80",
    releaseDate: "2022-12-10T00:00:00.000Z",
    type: "ep",
    streams: 2100000,
  },
  {
    id: "rel_011",
    title: "Cyberpunk City",
    coverImageUrl:
      "https://images.unsplash.com/photo-1542208998-f6dbbb27a72f?w=800&q=80",
    releaseDate: "2022-11-05T00:00:00.000Z",
    type: "album",
    streams: 4500000,
  },
  {
    id: "rel_012",
    title: "Ocean Drive",
    coverImageUrl:
      "https://images.unsplash.com/photo-1518626981033-f00082ce6f8b?w=800&q=80",
    releaseDate: "2022-10-20T00:00:00.000Z",
    type: "single",
    streams: 1800000,
  },
  {
    id: "rel_013",
    title: "Night Rider",
    coverImageUrl:
      "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=800&q=80",
    releaseDate: "2022-09-15T00:00:00.000Z",
    type: "single",
    streams: 670000,
  },
  {
    id: "rel_014",
    title: "Digital Love",
    coverImageUrl:
      "https://plus.unsplash.com/premium_photo-1725356401065-b12922e64ee4?w=800&q=80",
    releaseDate: "2022-08-01T00:00:00.000Z",
    type: "ep",
    streams: 3400000,
  },
  {
    id: "rel_015",
    title: "Gravity",
    coverImageUrl:
      "https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=800&q=80",
    releaseDate: "2022-07-22T00:00:00.000Z",
    type: "single",
    streams: 560000,
  },
  {
    id: "rel_016",
    title: "Timeless",
    coverImageUrl:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80",
    releaseDate: "2022-06-10T00:00:00.000Z",
    type: "album",
    streams: 5120000,
  },
];

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
];

export const fanEngagement: FanEngagement[] = [
  { label: "Total Followers", value: 12500 },
  { label: "Monthly Listeners", value: 45000 },
  { label: "Engagement Rate", value: 5.8 },
  { label: "New Subscribers", value: 320 },
  { label: "Playlist Adds", value: 1850 },
  { label: "Shares", value: 420 },
];

export const homeData: HomeData = {
  totalStreams: 1240000,
  monthlyListeners: 450000,
  totalRevenue: 48230,
  engagementRate: 5.8,
};

export const totalSalesData: TotalSalesData = {
  label: "Total Sales",
  value: 12450,
  goal: 20000,
};

export const salesPerDay: SalesPerDay[] = [
  { date: "2025-01-01", sales: 450 },
  { date: "2025-01-02", sales: 520 },
  { date: "2025-01-03", sales: 480 },
  { date: "2025-01-04", sales: 610 },
  { date: "2025-01-05", sales: 590 },
  { date: "2025-01-06", sales: 720 },
  { date: "2025-01-07", sales: 680 },
  { date: "2025-01-08", sales: 750 },
  { date: "2025-01-09", sales: 810 },
  { date: "2025-01-10", sales: 790 },
  { date: "2025-01-11", sales: 850 },
  { date: "2025-01-12", sales: 920 },
  { date: "2025-01-13", sales: 1000 },
  { date: "2025-01-14", sales: 1050 },
  { date: "2025-01-15", sales: 1120 },
  { date: "2025-01-16", sales: 1080 },
  { date: "2025-01-17", sales: 1150 },
  { date: "2025-01-18", sales: 1220 },
  { date: "2025-01-19", sales: 1180 },
  { date: "2025-01-20", sales: 1250 },
  { date: "2025-01-21", sales: 1320 },
  { date: "2025-01-22", sales: 1280 },
  { date: "2025-01-23", sales: 1350 },
  { date: "2025-01-24", sales: 1420 },
  { date: "2025-01-25", sales: 1380 },
  { date: "2025-01-26", sales: 1450 },
  { date: "2025-01-27", sales: 1520 },
  { date: "2025-01-28", sales: 1480 },
  { date: "2025-01-29", sales: 1550 },
  { date: "2025-01-30", sales: 1620 },
  { date: "2025-01-31", sales: 1580 },
];

export const releasesPerStreams: ReleasesPerStreams[] = [
  { title: "Track A", streams: 150000 },
  { title: "Track B", streams: 132000 },
  { title: "Track C", streams: 115000 },
  { title: "Track D", streams: 108000 },
  { title: "Track E", streams: 102000 },
  { title: "Track F", streams: 95000 },
  { title: "Track G", streams: 88000 },
  { title: "Track H", streams: 82000 },
  { title: "Track I", streams: 76000 },
  { title: "Track J", streams: 70000 },
  { title: "Track K", streams: 64000 },
  { title: "Track L", streams: 58000 },
  { title: "Track M", streams: 52000 },
  { title: "Track N", streams: 46000 },
  { title: "Track O", streams: 40000 },
  { title: "Track P", streams: 34000 },
  { title: "Track Q", streams: 28000 },
  { title: "Track R", streams: 22000 },
  { title: "Track S", streams: 16000 },
  { title: "Track T", streams: 10000 },
];
