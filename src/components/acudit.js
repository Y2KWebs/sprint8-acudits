import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

export default function Acudit() {
  const [acudit, setAcudit] = useState("");

  //Seleccionamos aleatoriamente de dos APIs
  const apiUrl =
    Math.random() <= 0.5
      ? "https://icanhazdadjoke.com/"
      : "http://api.icndb.com/jokes/random";

  const fetchData = async () => {
    const result = await axios(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    setAcudit(result.data.joke || result.data.value.joke);
  };

  return (
    <>
      <div className="card-text p-2 mb-2">{acudit}</div>

      <Button onClick={fetchData}>següent acudit</Button>
    </>
  );
}
