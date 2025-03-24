"use client";

import { useParams,notFound } from "next/navigation";
import { useEffect, useState } from "react";


const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
};

export default function ReviewDetails() {
  const params = useParams();
  const [productid, setProductid] = useState<string>();
  const [reviewId, setReviewId] = useState<string>();

  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('Random Error');
}

  useEffect(() => {
    if (params?.productid && params?.reviewId) {
      setProductid(params.productid as string);
      setReviewId(params.reviewId as string);
    }
  }, [params]);

  if (parseInt(reviewId || "0") > 100) {
    return notFound();
}

  

  if (!productid || !reviewId) return <p>Lade Daten...</p>;

  return (
    <div>
      <h1>Produkt: {productid}</h1>
      <h2>Review ID: {reviewId}</h2>
    </div>
  );
}
