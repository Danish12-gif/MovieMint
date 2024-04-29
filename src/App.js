import './App.css';
import Header from './Header';
import Herosection from './components/Herosection';
import RecentProj from './components/RecentProj';
import TopProj from './components/TopProj';
import LatestProj from './components/LatestProj';
import UpcomingProjects from './components/UpcomingProjects';
import ProductionHouses from './components/ProductionHouses';
import Faqs from './components/Faqs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <Herosection />
      <LatestProj />
      <RecentProj />
      <TopProj />
      <UpcomingProjects />
      <ProductionHouses />
      <Faqs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
