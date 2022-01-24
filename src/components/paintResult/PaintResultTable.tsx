import React from "react";
import { IPaintResultTable } from "../../types/wall";

const PaintResultTable: React.FC<IPaintResultTable> = ({
  realWalls,
  totalArea,
}) => {
  return (
    <div className="grid grid-cols-2 max-w-[250px] w-full border border-gray-300 p-2">
      <div className="flex flex-col justify-center items-center">
        {realWalls.map((_wall, i) => (
          <p key={i}>Wall {i + 1}</p>
        ))}
        <p>Total</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        {realWalls.map((wall, i) => (
          <p key={i}>{wall.area / 10000} m²</p>
        ))}
        <p>{totalArea} m²</p>
      </div>
    </div>
  );
};

export default PaintResultTable;
