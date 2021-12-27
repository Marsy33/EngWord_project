import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderEng from "./components/header";
import FooterEng from "./components/footer";
import Card from "./components/Card";
import ThemeList from "./components/wordlist";
import TablWord from "./components/tabllist";
import data from "./components/data";

function App() {
  return (
    <div className="App">
      <HeaderEng></HeaderEng>
      <TablWord />
      {/*<Card {...data[0]} />*/}
      <FooterEng></FooterEng>
    </div>
  );
}

export default App;
