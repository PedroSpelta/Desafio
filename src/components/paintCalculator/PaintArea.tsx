import interact from "interactjs";
import React, { Dispatch, useEffect, useRef, useState } from "react";
import { IPaintSize, IPaintSizeState } from "../../types/paint/paint";

const PaintArea: React.FC<IPaintSizeState> = ({ size, setSize }) => {
  // const [size, setSize] = useState({ width: 80, height: 80 });

  const ref = React.useRef<HTMLDivElement>(null);

  const changePaintStyleSize = (size: IPaintSize) => {
    const event = ref.current;
    const { width, height } = size;
    if (!event) return;
    Object.assign(event.style, {
      width: `${width}px`,
      height: `${height}px`,
    });
  };

  useEffect(() => {
    changePaintStyleSize(size);
  }, [size]);

  useEffect(() => {
    if (!ref.current) return;
    interact(ref.current).resizable({
      edges: { top: true, left: true, bottom: true, right: true },
      listeners: {
        move: function (event) {
          console.log("refupdate");
          let { x, y } = event.target.dataset;
          const { width, height } = event.rect;
          if (width * height < 10000 || width * height > 150000) return;

          setSize({ width, height });
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
  }, [ref, setSize]);

  return (
    <div className="w-[80%] h-[70%] max-h-[400px] overflow-hidden">
      <div
        className=" border border-black overflow-auto wall resizable font-bold"
        ref={ref}
      >
        <p>
          {size.height / 100}m x {size.width / 100}m
        </p>
        <p>{((size.height * size.width) / 10000).toFixed(2)}m²</p>
      </div>
    </div>
  );
};

export default PaintArea;
