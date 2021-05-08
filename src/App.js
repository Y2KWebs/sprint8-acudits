import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import { Home } from "./components/home";
import { Welcome } from "./components/welcome";

function App() {
  const [welcome, setWelcome] = useState(true);
  const handleWelcome = () => {
    setWelcome(false);
  };

  return (
    <Container
      className="vh-100"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {welcome ? <Welcome handleWelcome={handleWelcome} /> : <Home />}
    </Container>
  );
}

export default App;
