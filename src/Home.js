import Herosection from "./components/Herosection";
import RecentProj from "./components/RecentProj";
import TopProj from "./components/TopProj";
import LatestProj from "./components/LatestProj";
import UpcomingProjects from "./components/UpcomingProjects";
import ProductionHouses from "./components/ProductionHouses";
import Faqs from "./components/Faqs";
import Newsletter from "./components/Newsletter";

function Home() {
  return (
    <>
      <Herosection />
      <LatestProj />
      <RecentProj />
      <TopProj />
      <UpcomingProjects />
      <ProductionHouses />
      <Faqs />
      <Newsletter />
    </>
  );
}

export default Home;
