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
      <Button variant="text" onClick={() => setSize(localSize)}>
        Change
      </Button>
    </div>
  );
};

export default PaintInput;
