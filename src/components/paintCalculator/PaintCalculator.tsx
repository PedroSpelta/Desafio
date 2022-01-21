import React, { useState } from "react";
import PaintRoomShape from "./PaintRoomShape";
import PaintSidebar from "./PaintSidebar";

function PaintCalculator() {
  const [differentWalls, setDifferentWalls] = useState(4);
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full max-w-4xl bg-gray-200 rounded-md flex items-center flex-col">
        <PaintRoomShape setDifferentWalls={setDifferentWalls}/>
        <div className="grid grid-cols-4 ">
          <PaintSidebar differentWalls={differentWalls}/>
        </div>
      </div>
    </div>
  );
}

export default PaintCalculator;
