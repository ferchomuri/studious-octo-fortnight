import {
  followerGrowthData,
  topLocationsData,
  engagementMetricsData,
  recentReleases,
} from "@/src/lib/mock-data";
import { FollowerGrowthChart } from "@/src/components/fans/FollowerGrowthChart";
import { TopLocationsList } from "@/src/components/fans/TopLocationsList";
import { EngagementMetricCard } from "@/src/components/fans/EngagementMetricCard";
import { ReleaseCard } from "@/src/components/releases/ReleaseCard";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Fan Engagement</h2>
          <p className="text-muted-foreground">
            Connect with your audience worldwide
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <FollowerGrowthChart data={followerGrowthData} />
            </div>
            <div className="lg:col-span-1">
              <TopLocationsList data={topLocationsData} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementMetricsData.map((metric) => (
              <EngagementMetricCard key={metric.label} metric={metric} />
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Fan Favorites</h3>
              <p className="text-sm text-muted-foreground">
                Your most listened tracks by your fans
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentReleases
                .sort((a, b) => b.streams - a.streams)
                .slice(0, 4)
                .map((release) => (
                  <ReleaseCard key={release.id} release={release} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
