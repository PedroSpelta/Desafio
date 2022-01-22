import React, { useEffect, useState } from "react";
import PaintArea from "./PaintArea";
import PaintInput from "./PaintInput";
import PaintRoomShape from "./PaintRoomShape";
import PaintSidebar from "./PaintSidebar";

const defaultWalls = [
  { width: 100, height: 100 },
  { width: 100, height: 100 },
  { width: 100, height: 100 },
  { width: 100, height: 100 },
];

function PaintCalculator() {
  const [walls, setWalls] = useState([defaultWalls]);
  const [actualSize, setActualSize] = useState(defaultWalls[0]);
  const [wallNumber, setWallNumber] = useState(1);
  const [wallQty, setWallQty] = useState(1);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full max-w-4xl bg-gray-200 rounded-md flex items-center flex-col">
        <PaintRoomShape setWallQty={setWallQty} />
        <div className="flex w-full">
          <PaintSidebar walls={walls} setWallNumber={setWallNumber} />
          <PaintArea size={actualSize} setSize={setActualSize} />
          <PaintInput size={actualSize} setSize={setActualSize} />
        </div>
      </div>
    </div>
  );
}

export default PaintCalculator;
