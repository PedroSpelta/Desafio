import React, { useEffect, useState } from "react";
import PaintArea from "./PaintArea";
import PaintRoomShape from "./PaintRoomShape";
import PaintSidebar from "./PaintSidebar";

function PaintCalculator() {
  const [walls, setWalls] = useState([{}]);
    
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full max-w-4xl bg-gray-200 rounded-md flex items-center flex-col">
        <PaintRoomShape setWalls={setWalls} />
        <div className="">
          <PaintSidebar walls={walls} />
          <PaintArea />
        </div>
      </div>
    </div>
  );
}

export default PaintCalculator;
