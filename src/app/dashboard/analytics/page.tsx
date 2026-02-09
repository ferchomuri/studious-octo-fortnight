import {
  salesAnalytics,
  userGrowthData,
  deviceDistributionData,
} from "@/src/lib/mock-data";
import { SalesPerformanceChart } from "@/src/components/analytics/charts/SalesPerformanceChart";
import { UserGrowthChart } from "@/src/components/analytics/charts/UserGrowthChart";
import { DeviceStatsChart } from "@/src/components/analytics/charts/DeviceStatsChart";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Analytics Overview</h2>
          <p className="text-muted-foreground">
            Detailed insights into your performance
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid grid-cols-1">
            <SalesPerformanceChart data={salesAnalytics} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <UserGrowthChart data={userGrowthData} />
            </div>
            <div className="md:col-span-1">
              <DeviceStatsChart data={deviceDistributionData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
