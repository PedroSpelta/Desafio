import React, { useState } from "react";
import { defaultWalls } from "../../constants/wall";
import { IWalls } from "../../types/wall";
import PaintForm from "./PaintForm";
import PaintRoomShape from "./PaintRoomShape";
import PaintSidebar from "./PaintSideBar";

function PaintCalculator() {
  const [walls, setWalls] = useState<IWalls>(defaultWalls);
  const [wallNumber, setWallNumber] = useState(0);
  console.log(walls);
  
  return (
    <div className="flex flex-col items-center">
      <PaintRoomShape walls={walls} setWalls={setWalls} />
      <div className="flex justify-center items-center">
        <PaintSidebar walls={walls} setWallNumber={setWallNumber} wallNumber={wallNumber} />
        <PaintForm walls={walls} setWalls={setWalls} wallNumber={wallNumber} />
      </div>
    </div>
  );
}

export default PaintCalculator;
