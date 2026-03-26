import "./App.css";
import GraphicDesining from "./components/GraphicDesining";
import HomeBanner from "./components/HomeBanner";
import HomeBanner2 from "./components/HomeBanner2";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import StatsAndFacts from "./components/StatsAndFacts";

function App() {
  return (
    <>
      <Header />
      <HomeBanner />
      <StatsAndFacts />
      <HomeBanner2 />
      <GraphicDesining />
      <Reviews />
    </>
  );
}

export default App;
