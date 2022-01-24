import React, { useState } from "react";
import { defaultWalls } from "../../constants/wall";
import { IWalls } from "../../types/wall";
import PaintForm from "../paintForm/PaintForm";
import PaintResult from "../paintResult/PaintResult";
import PaintRoomShape from "../paintShape/PaintRoomShape";
import PaintSidebar from "./PaintSideBar";
import SectionTitle from "./SectionTitle";

function PaintCalculator() {
  const [walls, setWalls] = useState<IWalls>(defaultWalls);
  const [wallNumber, setWallNumber] = useState(0);
  console.log(walls);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row justify-center border-2 border-purple-900 max-w-4xl w-full">
        <div className="flex flex-col">
          <PaintRoomShape walls={walls} setWalls={setWalls} />
          <SectionTitle number={2} title="Measure your walls" />
          <div className="flex items-center">
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
          </div>
        </div>
        <PaintResult walls={walls} wallNumber={wallNumber}/>
      </div>
    </div>
  );
}

export default PaintCalculator;
