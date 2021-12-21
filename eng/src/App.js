import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderEng from "./components/header";
import FooterEng from "./components/footer";
import CardWord from "./components/cardword";
import ThemeList from "./components/wordlist";
import TablWord from "./components/tabllist";

const EditDel = [{ isSelected: true }];
function App() {
  return (
    <div className="App">
      <HeaderEng></HeaderEng>
      <ThemeList></ThemeList>
      <TablWord isSelected={EditDel[0].isSelected}></TablWord>
      <CardWord></CardWord>
      <FooterEng></FooterEng>
    </div>
  );
}

export default App;
