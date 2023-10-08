import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersSearch from "./components/PlayersSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="titre">Football Players</h1>
      <PlayersSearch />
    </div>
  );
}

export default App;
