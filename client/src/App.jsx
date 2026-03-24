import "./App.css";
import HomeBanner from "./components/HomeBanner";
import HomeBanner2 from "./components/HomeBanner2";
import Header from "./components/Header";
import StatsAndFacts from "./components/StatsAndFacts";

function App() {
  return (
    <>
      <Header />
      <HomeBanner />
      <StatsAndFacts />
      <HomeBanner2 />
    </>
  );
}

export default App;
