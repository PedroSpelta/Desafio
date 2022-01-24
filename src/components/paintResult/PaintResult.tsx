import React from "react";
import { IPaintResult } from "../../types/wall";
import SectionTitle from "../main/SectionTitle";

const PaintResult: React.FC<IPaintResult> = ({ walls }) => {
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
            <p key={i}>{wall.area/10000} m²</p>
          ))}
          <p>teste</p>
        </div>
      </div>
      <p>Paint liters</p>
      <p className="text-xl font-bold">450 Liters</p>
    </div>
  );
};

export default PaintResult;
