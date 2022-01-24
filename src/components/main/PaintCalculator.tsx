import React, { useState } from "react";
import { defaultWalls } from "../../constants/wall";
import { IWalls } from "../../types/wall";
import PaintForm from "./PaintForm";
import PaintResult from "./PaintResult";
import PaintRoomShape from "../paintShape/PaintRoomShape";
import PaintSidebar from "./PaintSideBar";

function PaintCalculator() {
  const [walls, setWalls] = useState<IWalls>(defaultWalls);
  const [wallNumber, setWallNumber] = useState(0);
  console.log(walls);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center border-2 border-purple-900 max-w-4xl w-full">
        <PaintRoomShape walls={walls} setWalls={setWalls} />
        <div className="flex justify-center items-center max-w-4xl w-full">
          <PaintSidebar
            walls={walls}
            setWallNumber={setWallNumber}
            wallNumber={wallNumber}
          />
          <PaintForm
            walls={walls}
            setWalls={setWalls}
            wallNumber={wallNumber}
          />
          <PaintResult />
        </div>
      </div>
    </div>
  );
}

export default PaintCalculator;
