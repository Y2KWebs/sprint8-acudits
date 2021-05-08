import axios from "axios";
import { useEffect, useState } from "react";

export default function Meteo() {
  const [meteo, setMeteo] = useState("");
  useEffect(() => {
    const getMeteo = async () => {
      const result = await axios(
        "http://api.openweathermap.org/data/2.5/weather?q=barcelona&units=metric&appid=6c35df700d93402106941f4d54f5a5a1"
      );
      setMeteo(
        `Temp: ${result.data.main.temp}° - Mínima: ${result.data.main.temp_min}° - Máxima: ${result.data.main.temp_max}° - Humedad: ${result.data.main.humidity}`
      );
    };
    getMeteo();
  }, []);

  return meteo;
}
