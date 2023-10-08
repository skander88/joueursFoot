import React from "react";
import Player from "./Player";
import Players from "./Players";

const PlayersList = () => {
  return (
    <div className="d-flex  justify-content-center">
      {Players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
