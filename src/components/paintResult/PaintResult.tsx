import React, { useEffect, useState } from "react";
import { getPaintCanBySize } from "../../lib/paint";
import { IPaintResult } from "../../types/wall";
import SectionTitle from "../main/SectionTitle";
import PaintCans from "./PaintCans";

const PaintResult: React.FC<IPaintResult> = ({ walls }) => {
  const [paintCans, setPaintCans] = useState([0, 0, 0, 0]);
  const totalArea = walls.reduce((prev, cur) => {
    return prev + cur.area / 10000;
  }, 0);

  const totalLiters = totalArea / 5;

  useEffect(() => {
    setPaintCans(getPaintCanBySize(totalLiters));
  }, [totalLiters]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <SectionTitle title="How Much Paint You Need" number={3} />
      <p>Total Area</p>
      <div className="grid grid-cols-2 max-w-[250px] w-full border border-gray-300 p-2">
        <div className="flex flex-col justify-center items-center">
          {walls.map((_wall, i) => (
            <p key={i}>Wall {i + 1}</p>
          ))}
          <p>Total</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {walls.map((wall, i) => (
            <p key={i}>{wall.area / 10000} m²</p>
          ))}
          <p>{totalArea} m²</p>
        </div>
      </div>
      <p>Paint liters</p>
      <p className="text-xl font-bold">{totalLiters} Liters</p>
      <PaintCans paintCans={paintCans} />
    </div>
  );
};

export default PaintResult;
