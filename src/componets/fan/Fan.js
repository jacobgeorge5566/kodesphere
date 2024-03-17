"use client";
import { useState } from "react";
import Image from "next/image";
export default function Fan() {
  const [FanSpeed, setFanSpeed] = useState(0);

  function fan(a) {
    if (a === 1 && FanSpeed < 5) {
      setFanSpeed(FanSpeed + 1);
    } else if (a !== 1 && FanSpeed > 0) {
      setFanSpeed(FanSpeed - 1);
    }
  }

  return (
    <div>
        <Image src="/fan.png" width={100} height={100} alt="fan" />
          Fan Speed: {FanSpeed}
          <button onClick={() => fan(1)}>Increase</button>
          <button onClick={() => fan(0)}>Decrease</button>
    </div>
  );
}