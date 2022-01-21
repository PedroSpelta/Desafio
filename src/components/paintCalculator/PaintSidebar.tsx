import React from "react";

interface IPantSidebar {
  differentWalls:Number,
}

const PaintSidebar: React.FC<IPantSidebar> = ({ differentWalls }) => {
  const number = [];
  for (let i = 0; i < differentWalls; i += 1) {
    number.push([]);
  }
  return (
    <div className="rounded-xl bg-[#46446d] h-[370px] w-20 flex flex-col items-center justify-center gap-2">
      <div className="bg-white w-16 h-16 rounded-xl"></div>
      {number.map((e, i) => (
        <div
          key={i}
          className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        ></div>
      ))}
    </div>
  );
};

export default PaintSidebar;
