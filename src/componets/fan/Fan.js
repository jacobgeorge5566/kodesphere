"use client";
import { useState } from "react";
import Image from "next/image";

export default function Fan() {
  const [FanSpeed, setFanSpeed] = useState(0);

  async function  fan(a) {
    if (a === 1 && FanSpeed < 5) {
      setFanSpeed(FanSpeed + 1);
    } else if (a !== 1 && FanSpeed > 0) {
      setFanSpeed(FanSpeed - 1);
    }
    const data = {  
      "teamid" : "BQ2xqr6",
      "device" : "fan",
      "value" : FanSpeed
    }
    const response = await fetch("https://kodessphere-api.vercel.app/devices/BQ2xqr6", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data), 
    });
    console.log(response);
  }

  return (
    <div>
        <Image src="/fan.png" width={100} height={100} alt="fan" />
          Fan Speed: {FanSpeed}
          <div>
          <button onClick={() => fan(1)}>Increase</button>
          <br></br>
          <button onClick={() => fan(0)}>Decrease</button>
          </div>
    </div>
  );
}