import interact from "interactjs";
import React, { useEffect, useRef } from "react";
import { IPaintArea, IWall } from "../../types/paint/paint";
import { MdWindow, MdDoorFront } from "react-icons/md";

const PaintArea: React.FC<IPaintArea> = ({ actualWall, setActualWall }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const changePaintStyleSize = (size: IWall) => {
    const { width, height } = size;
    const { current } = ref;
    if (!current) return;
    Object.assign(current.style, {
      width: `${width}px`,
      height: `${height}px`,
    });
  };

  useEffect(() => {
    changePaintStyleSize(actualWall);
  }, [actualWall]);

  // const test = (width: number, height: number) => {
  //   setWalls((state) => {
  //     const newWalls = { ...state };
  //     newWalls.walls[walls.active] = { width, height };
  //     return newWalls;
  //   });
  // };

  useEffect(() => {
    const { current } = ref;
    if (!current) return;
    interact(current).resizable({
      edges: { top: true, left: true, bottom: true, right: true },
      listeners: {
        move: function (event) {
          const { width, height } = event.rect;
          if (width * height < 10000 || width * height > 150000) return;
          setActualWall((state) => ({ ...state, width, height }));
          // let { x, y } = event.target.dataset;
          // setSize({ width, height });
          // x = 0;
          // y = 0;
          // x = (parseFloat(x) || 0) + event.deltaRect.left;
          // y = (parseFloat(y) || 0) + event.deltaRect.top;
          // Object.assign(event.target.style, {
          //   width: `${width}px`,
          //   height: `${height}px`,
          //   transform: `translate(${x}px, ${y}px)`,
          // });
          // Object.assign(event.target.dataset, { x, y });
        },
      },
    });
  }, [setActualWall]);

  return (
    <div className="w-[80%] h-[70%] max-h-[400px] overflow-hidden">
      <div
        className=" border border-black overflow-auto wall resizable font-bold relative"
        ref={ref}
      >
        <p>
          {actualWall.height / 100}m x {actualWall.width / 100}m
        </p>
        <p>{((actualWall.height * actualWall.width) / 10000).toFixed(2)}m²</p>
        <p className="absolute bottom-3 right-4 flex justify-center items-center">
          <MdWindow />
          <span style={{ fontSize: "10px" }}>x</span>
          {actualWall.windows}
          <MdDoorFront />
          <span style={{ fontSize: "10px" }}>x</span>
          {actualWall.doors}
        </p>
      </div>
    </div>
  );
};

export default PaintArea;
