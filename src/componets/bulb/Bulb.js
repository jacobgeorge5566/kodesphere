"use client";
import { useState } from "react";
import Image from "next/image";
export default function Fan() {
  const [bulb, setBulb] = useState(0);
  const sb = async (a) => {
    if (a === 1) {
      setBulb(1);
    } else if (a !== 1) {
      setBulb(0);
    }
    const data = {  
      "teamid" : "BQ2xqr6",
      "device" : "bulb",
      "value" : bulb
    }
    const response = await fetch("https://kodessphere-api.vercel.app", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    console.log(response);
  };


  return (
    <div>
      <Image src="/bulb.jpg" width={100} height={100} alt="bulb" />
      Bulb: 
      <div className=" ">
      <button onClick={() => sb(1)}>ON</button>
      <br></br>
      <button onClick={() => sb(0)}>OFF</button>
      </div>
    </div>
  );
}