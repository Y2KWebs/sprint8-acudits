import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Welcome = () => (
  <Card className="shadow-lg text-center" style={{ width: "48rem" }}>
    <Card.Header>Hola</Card.Header>
    <Card.Body>
      <Card.Title>Bienvenido</Card.Title>
      <Card.Text>
        <Link to="/home">
          <Button>Entrar</Button>
        </Link>
      </Card.Text>
    </Card.Body>
  </Card>
);
