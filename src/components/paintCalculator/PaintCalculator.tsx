import React, { useEffect, useState } from "react";
import { IWall, IWallsObject } from "../../types/paint/paint";
import PaintArea from "./PaintArea";
import PaintInput from "./PaintInput";
import PaintRoomShape from "./PaintRoomShape";
import PaintSidebar from "./PaintSidebar";

const defaultWalls = {
  walls: [
    { width: 100, height: 100 },
  ],
  active: 0,
};

function PaintCalculator() {
  const [walls, setWalls] = useState<IWallsObject>(defaultWalls);
  const [actualWall, setActualWall] = useState<IWall>(
    walls.walls[walls.active]
  );
  const [wallQty, setWallQty] = useState(1);  

  useEffect(() => {
    const { width, height } = actualWall;
    setWalls((state) => {
      const newWalls = { ...state };
      newWalls.walls[walls.active] = { width, height };
      return newWalls;
    });
  }, [actualWall]);

  useEffect(() => {
    setActualWall(walls.walls[walls.active]);
  }, [walls.active, walls.walls]);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full max-w-4xl bg-gray-200 rounded-md flex items-center flex-col">
        <PaintRoomShape walls={walls} setWalls={setWalls} />
        <div className="flex w-full">
          <PaintSidebar walls={walls} setWalls={setWalls} wallQty={wallQty}/>
          <PaintArea actualWall={actualWall} setActualWall={setActualWall} />
          <PaintInput actualWall={actualWall} setActualWall={setActualWall} />
        </div>
      </div>
    </div>
  );
}

export default PaintCalculator;
