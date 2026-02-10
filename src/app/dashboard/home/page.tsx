import {
  homeData,
  totalSalesData,
  salesPerDay,
  releasesPerStreams,
} from "@/src/lib/mock-data";
import { HomeSection } from "@/src/components/home/HomeSection";
import { TotalSalesChart } from "@/src/components/home/charts/TotalSalesChart";
import { SalesTrendChart } from "@/src/components/home/charts/SalesTrendChart";
import { TopReleasesChart } from "@/src/components/home/charts/TopReleasesChart";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div id="home" className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">
          Here, your stats are waiting for you
        </h2>
        <HomeSection data={homeData} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <TotalSalesChart data={totalSalesData} />
          </div>
          <div className="lg:col-span-2">
            <SalesTrendChart data={salesPerDay} />
          </div>
        </div>

        <div className="w-full">
          <TopReleasesChart data={releasesPerStreams} />
        </div>
      </div>
    </div>
  );
}
