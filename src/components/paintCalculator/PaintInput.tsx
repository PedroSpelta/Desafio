import { Button, TextField } from "@mui/material";
import { width } from "@mui/system";
import React, { useState } from "react";
import { IPaintSizeState } from "../../types/paint/paint";

const PaintInput: React.FC<IPaintSizeState> = ({ size, setSize }) => {
  const [localSize, setLocalSize] = useState({ width: 80, height: 80 });

  const inputToNumber = (input: string) => {
    if (input.length > 4) return Number(input.slice(0, -1));
    return Number(input.replace(/[^0-9]/g, ""));
  };

  const localToStateSize = () => {
    const {width, height} = localSize;
    const area = width * height;
    if (area > 150000 || area < 10000) {
      return window.alert('Area should be bigger than 1m² and smaller than 15m²')
    }
    return setSize(localSize)
  }
  return (
    <div>
      <div className="w-20">
        <TextField
          size="small"
          value={localSize.height}
          onChange={(e) =>
            setLocalSize((state) => ({
              ...state,
              height: inputToNumber(e.target.value),
            }))
          }
        />
      </div>
      <div className="w-20">
        <TextField
          size="small"
          value={localSize.width}
          onChange={(e) =>
            setLocalSize((state) => ({
              ...state,
              width: inputToNumber(e.target.value),
            }))
          }
        />
      </div>
      <Button variant="text" onClick={localToStateSize}>
        Change
      </Button>
    </div>
  );
};

export default PaintInput;
