import React from "react";
import Player from "./Player"; // Import the Player component
import playersData from "./players"; // Import the player data from players.js

// Define a functional component named PlayersList
function PlayersList() {
  return (
    <div>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;   // Export the PlayersList component for use in other parts of the application
