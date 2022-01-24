import React from "react";

function PaintResult() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <p className="bg-[#373655] w-[250px] py-2 text-white text-center font-semibold">
        How Much Paint I Need?
      </p>
      <p>Total Area</p>
      <div className="grid grid-cols-2 max-w-[250px] w-full border border-gray-300 p-2">
        <div className="flex flex-col justify-center items-center">
          <p>Wall 1</p>
          <p>Wall 1</p>
          <p>Wall 1</p>
          <p>Wall 1</p>
          <p>Total</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>2012930 m²</p>
          <p>Wall 1</p>
          <p>Wall 1</p>
          <p>Wall 1</p>
          <p>teste</p>
        </div>
      </div>
      <p>Paint liters</p>
      <p className="text-xl font-bold">450 Liters</p>
    </div>
  );
}

export default PaintResult;
