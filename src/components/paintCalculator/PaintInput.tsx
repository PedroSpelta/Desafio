import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { IPaintSizeState } from "../../types/paint/paint";

const PaintInput: React.FC<IPaintSizeState> = ({
  actualWall,
  setActualWall,
}) => {
  const [localSize, setLocalSize] = useState({ width: 80, height: 80 });

  const inputToNumber = (input: string) => {
    if (input.length > 4) return Number(input.slice(0, -1));
    return Number(input.replace(/[^0-9]/g, ""));
  };

  const localToStateSize = () => {
    const { width, height } = localSize;
    const area = width * height;
    if (area > 150000 || area < 10000) {
      return window.alert(
        "Area should be bigger than 1m² and smaller than 15m²"
      );
    }
    return setActualWall(localSize);
  };

  return (
    <div className="flex flex-col">
      <TextField
        label="Height"
        size="small"
        sx={{ m: 1, width: "14ch", height: "ch" }}
        value={localSize.height}
        InputProps={{
          endAdornment: <InputAdornment position="end">m</InputAdornment>,
        }}
        onChange={(e) =>
          setLocalSize((state) => ({
            ...state,
            height: inputToNumber(e.target.value),
          }))
        }
      />
      <TextField
        label="Width"
        size="small"
        sx={{ m: 1, width: "14ch", height: "ch" }}
        value={localSize.width}
        InputProps={{
          endAdornment: <InputAdornment position="end">m</InputAdornment>,
        }}
        onChange={(e) =>
          setLocalSize((state) => ({
            ...state,
            width: inputToNumber(e.target.value),
          }))
        }
      />
      <Button variant="text" onClick={localToStateSize}>
        Change
      </Button>
    </div>
  );
};

export default PaintInput;
