import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      const fet = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/${id}`);
      const json = await fet.json();
      setData(json);
    }
    getData();
  }, []);

  return (
    <div className="flex justify-center text-6xl">
      <section>
        <img width={500} height={500}  src={data?.image} />
        <br />
        <p>{data?.title}</p>
        <br />
        <p>{data?.description}</p>
      </section>
    </div>
  );
}
