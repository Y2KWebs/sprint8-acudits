import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Welcome = (props) => (
  <Card className="shadow-lg text-center" style={{ width: "48rem" }}>
    <Card.Header>Hola</Card.Header>
    <Card.Body>
      <Card.Title>Bienvenido</Card.Title>
      <Card.Text>
        <Button onClick={() => props.handleWelcome()}>Entrar</Button>
      </Card.Text>
    </Card.Body>
  </Card>
);
