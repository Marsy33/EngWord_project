import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderEng from "./components/header";
import FooterEng from "./components/footer";
import Card from "./components/Card";
import TablWord from "./components/tabllist";
import data from "./components/data";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderEng
          home={<Link to="/">Home</Link>}
          game={<Link to="/game">Game</Link>}
          logo={
            <Link className="Link LogoHeader" to="/">
              EngWord
            </Link>
          }
        ></HeaderEng>

        <Routes>
          <Route path="/game" element={<Card {...data[0]} />}></Route>
          <Route path="/" element={<TablWord />}></Route>
        </Routes>
        <FooterEng
          home={
            <Link className="Link" to="/">
              Home
            </Link>
          }
          game={
            <Link className="Link" to="/game">
              Game
            </Link>
          }
          logo={
            <Link className="Link" to="/">
              EngWord
            </Link>
          }
        ></FooterEng>
      </div>
    </Router>
  );
}

export default App;
