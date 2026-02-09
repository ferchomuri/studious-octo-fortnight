import { HomeData } from "@/src/lib/interfaces/types";
import { HomeCard } from "./HomeCard";
import { Play, Users, DollarSign, Activity } from "lucide-react";

interface HomeSectionProps {
  data: HomeData;
}

export function HomeSection({ data }: HomeSectionProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <HomeCard
        title="Total Streams"
        value={formatNumber(data.totalStreams)}
        icon={Play}
        trend="23.5%"
        trendDirection="up"
        iconGradient="from-purple-500 to-fuchsia-500"
      />
      <HomeCard
        title="Monthly Listeners"
        value={formatNumber(data.monthlyListeners)}
        icon={Users}
        trend="12.3%"
        trendDirection="up"
        iconGradient="from-blue-500 to-cyan-400"
      />
      <HomeCard
        title="Revenue"
        value={formatCurrency(data.totalRevenue)}
        icon={DollarSign}
        trend="18.7%"
        trendDirection="up"
        iconGradient="from-emerald-400 to-teal-500"
      />
      <HomeCard
        title="Engagement Rate"
        value={data.engagementRate + "%"}
        icon={Activity}
        trend="2.1%"
        trendDirection="down"
        iconGradient="from-pink-500 to-rose-500"
      />
    </section>
  );
}
