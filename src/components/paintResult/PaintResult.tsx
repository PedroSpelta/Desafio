import React, { useEffect, useState } from "react";
import { defaultRealWalls, defaultWall } from "../../constants/wall";
import { getPaintCanBySize } from "../../lib/paint";
import { IPaintResult } from "../../types/wall";
import SectionTitle from "../main/SectionTitle";
import PaintCans from "./PaintCans";
import PaintResultTable from "./PaintResultTable";

const PaintResult: React.FC<IPaintResult> = ({ walls }) => {
  const [paintCans, setPaintCans] = useState([0, 0, 0, 0]);
  const [realWalls, setRealWalls] = useState(defaultRealWalls);
  const totalArea = realWalls.reduce((prev, cur) => {
    return prev + cur.area / 10000;
  }, 0);

  const totalLiters = totalArea / 5;

  useEffect(() => {
    if (walls.length === 4) return setRealWalls(walls);
    else if (walls.length === 2) {
      const newRealWalls = [...walls];
      newRealWalls.push(walls[0]);
      newRealWalls.push(walls[1]);
      return setRealWalls(newRealWalls);
    }
    const newRealWalls = [...walls];
    newRealWalls.push(walls[0]);
    newRealWalls.push(walls[0]);
    newRealWalls.push(walls[0]);
    return setRealWalls(newRealWalls);
  }, [walls]);

  useEffect(() => {
    setPaintCans(getPaintCanBySize(totalLiters));
  }, [totalLiters]);

  return (
    <div className="h-full w-full flex flex-col md:items-center justify-center">
      <SectionTitle title="How Much Paint You Need" number={3} />
      <PaintResultTable realWalls={realWalls} totalArea={totalArea} />
      <p className="text-base font-bold">Total: {totalLiters} Liters</p>
      <PaintCans paintCans={paintCans} />
    </div>
  );
};

export default PaintResult;
