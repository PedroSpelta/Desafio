import interact from "interactjs";
import React, { useEffect, useRef, useState } from "react";

function PaintArea() {
  const [size, setSize] = useState({ width: 80, height: 80 });
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    interact(ref.current).resizable({
      edges: { top: true, left: true, bottom: true, right: true },
      listeners: {
        move: function (event) {
          let { x, y } = event.target.dataset;
          const { width, height } = event.rect;
          setSize({ width, height });

          x = 0;
          y = 0;
          // x = (parseFloat(x) || 0) + event.deltaRect.left;
          // y = (parseFloat(y) || 0) + event.deltaRect.top;
          console.log(width, height);

          Object.assign(event.target.style, {
            width: `${event.rect.width}px`,
            height: `${event.rect.height}px`,
            transform: `translate(${x}px, ${y}px)`,
          });

          Object.assign(event.target.dataset, { x, y });
        },
      },
    });
  }, [ref]);

  return (
    <div className="w-40 h-40">
      <div
        className="w-20 h-20 border border-black overflow-auto wall resizable"
        ref={ref}
      >
        {size.height}m x {size.height}m
      </div>
    </div>
  );
}

export default PaintArea;
