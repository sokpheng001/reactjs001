import { useState } from "react";
import "./App.css";
import CardComponent from "./components/home/CardComponent";
import { useEffect } from "react";

async function getData() {
  const fet = await fetch(`https://restcountries.com/v3.1/all`);
  const json = await fet.json();
  return json;
}

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      async function get() {
        setData(await getData());
      }
      get();
      setLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return (
      <main className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
          <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
          </div>
        ))}
      </main>
    );
  }
  return (
    <main className="grid grid-cols-5 gap-2">
      {data?.map((e) => (
        <CardComponent
          id={e?.area}
          countryName={e.name?.common}
          currency={e?.currencies?.KHR?.symbol}
          profile={e.flags.png}
          alt={e.flags.alt}
        />
      ))}
    </main>
  );
}
export default App;
