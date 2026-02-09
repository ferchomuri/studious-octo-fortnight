import { HomeSection } from "@/src/components/home/HomeSection";
import { homeData } from "@/src/lib/mock-data";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div id="home" className="min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Home</h2>
        <HomeSection data={homeData} />
      </div>
    </div>
  );
}
