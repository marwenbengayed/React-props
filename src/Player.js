import React from "react";
import Card from 'react-bootstrap/Card';

// Define a functional component named Player that accepts player attributes as props
function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {  
   // The component returns JSX, which represents a Bootstrap Card displaying player information
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player; // Export the Player component for use in other parts of the application

