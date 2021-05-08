import React from "react";
import Acudit from "./acudit";
import Meteo from "./meteo";
import Card from "react-bootstrap/Card";

export const Home = () => (
  <Card className="shadow-lg text-center" style={{ width: "48rem" }}>
    <Card.Header>
      <Meteo />
    </Card.Header>
    <Card.Body>
      <Card.Title>Preparat per riure?</Card.Title>
      <Card.Text>
        <Acudit />
      </Card.Text>
    </Card.Body>
  </Card>
);
