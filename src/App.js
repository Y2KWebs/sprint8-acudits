import Acudit from "./components/acudit";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container
      className="vh-100"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className="shadow-lg text-center" style={{ width: "48rem" }}>
        <Card.Header>Tiempo</Card.Header>
        <Card.Body>
          <Card.Title>Preparat per riure?</Card.Title>
          <Card.Text>
            <Acudit />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
