import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { useGetProductByIdQuery } from "../redux/services/productSlice";

export default function Detail() {
  const { id } = useParams();
  const{data, isError, isLoading} = useGetProductByIdQuery(id);

  if(isLoading){
    return <div className="flex justify-center text-5xl">Loading...</div>
  }
  return (
    <div className="flex justify-center text-6xl">
      <section>
        <img width={500} height={500} src={data?.image} />
        <br />
        <p>{data?.title}</p>
        <br />
        <p>{data?.description}</p>
      </section>
    </div>
  );
}
