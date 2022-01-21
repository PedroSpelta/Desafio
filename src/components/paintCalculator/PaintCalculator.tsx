import React from "react";
import PaintSidebar from "./PaintSidebar";

function PaintCalculator() {
  return (
    <div className="flex w-full justify-center ">
      <div className="grid grid-cols-4 w-full max-w-4xl bg-gray-200 rounded-md">
        <PaintSidebar />
      </div>
    </div>
  );
}

export default PaintCalculator;
