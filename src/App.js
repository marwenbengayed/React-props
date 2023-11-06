import React from "react";
import "./App.css";  // Import CSS styles for the App component
import PlayersList from "./PlayersList";  // Import the PlayersList component

// Define the root component of the React application, named App
function App() {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
// Export the App component for use as the entry point of the React application and in other parts of the application
