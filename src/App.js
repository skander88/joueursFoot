import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carte from "./components/Card";
import Carte2 from "./components/Card2";
import Carte3 from "./components/Card3";
import Carte4 from "./components/Card4";

function App() {
  return (
    <div className="back">
      <header>
        <h1 className="tete"> Football Players </h1>
      </header>
      <div className="princ">
        <Carte />
        <Carte2 />
        <Carte3 />
        <Carte4 />
      </div>
    </div>
  );
}

export default App;
