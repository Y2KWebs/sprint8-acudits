import { useState } from "react";
import axios from "axios";

export default function Acudit() {
  const [acudit, setAcudit] = useState("");

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
      {acudit}
      <br />
      <button onClick={fetchData}>següent acudit</button>
    </>
  );
}
