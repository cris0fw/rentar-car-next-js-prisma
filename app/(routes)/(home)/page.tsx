import Navbar from "@/components/shared/Navbar";
import FirtsBlock from "./components/FirtsBlock";
import SliderBrand from "./components/SliderBrand/SliderBrand";
import Features from "./components/Features/Features";
import OutFleet from "./components/OutFleet/OutFleet";
import DriveToday from "./components/DriveToday";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FirtsBlock />
      <SliderBrand />
      <Features />
      <OutFleet />
      <DriveToday />
    </main>
  );
}
