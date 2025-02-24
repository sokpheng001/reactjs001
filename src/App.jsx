import { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const fet = await fetch(`${import.meta.env.VITE_API_ENDPOINT}`);
      const json = await fet.json();
      setData(json);
    }
    getData();
  }, []);
  return (
    <main className="flex justify-center ">
      <section className="grid grid-cols-3">
        {data.map((e) => (
          <CardComponent
            key={e?.id}
            id={e?.id}
            title={e?.title}
            image={e?.image}
            description={e?.description}
          />
        ))}
      </section>
    </main>
  );
}
export default App;
