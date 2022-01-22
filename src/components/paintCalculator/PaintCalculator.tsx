import React, { useEffect, useState } from "react";
import PaintArea from "./PaintArea";
import PaintInput from "./PaintInput";
import PaintRoomShape from "./PaintRoomShape";
import PaintSidebar from "./PaintSidebar";

function PaintCalculator() {
  const [walls, setWalls] = useState([{ width: 80, height: 80 }]);
  const [actualSize, setActualSize] = useState({ width: 80, height: 80 });

  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full max-w-4xl bg-gray-200 rounded-md flex items-center flex-col">
        <PaintRoomShape setWalls={setWalls} />
        <div className="flex w-full">
          <PaintSidebar walls={walls} />
          <PaintArea size={actualSize} setSize={setActualSize} />
          <PaintInput size={actualSize} setSize={setActualSize} />
        </div>
      </div>
    </div>
  );
}

export default PaintCalculator;
