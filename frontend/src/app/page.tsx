"use client";

import { useEffect } from "react";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://temuulen-food-delivery.onrender.com/"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
}