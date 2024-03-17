"use client";
import Fan from "../componets/fan/Fan";
import Bulb from "../componets/bulb/Bulb";
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 w-[1200px] m-auto px-[50px] gap-3">
        <div className="bg-gray-400 rounded-md h-[400px] p-2 text-white">fan
        <Fan></Fan>
        </div>
        <div className="bg-gray-400 rounded-md h-[400px] p-2 text-white">bulb
        <Bulb></Bulb>
        </div>
        <div className="bg-gray-400 rounded-md h-[400px] p-2 text-white">led

        </div>
        <div className="bg-gray-400 rounded-md h-[400px] p-2 text-white">AC
        </div>
      </div>
      
    </div>
  );
}

