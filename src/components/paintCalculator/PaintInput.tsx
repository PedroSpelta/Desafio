import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { height, minHeight } from "@mui/system";
import React, { useState } from "react";
import { IPaintInput } from "../../types/paint/paint";

const PaintInput: React.FC<IPaintInput> = ({ actualWall, setActualWall }) => {
  const [localSize, setLocalSize] = useState({ width: 100, height: 100 });

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
      <FormControl sx={{ m: 1, width: "14ch" }} size="small">
        <InputLabel id="windows-label">Windows</InputLabel>
        <Select labelId="windows-label" label="Windows" >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: "14ch" }} size="small">
        <InputLabel id="doors-label" >Doors</InputLabel>
        <Select labelId="doors-label" label="Doors">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>


      <Button variant="text" onClick={localToStateSize}>
        Change
      </Button>
    </div>
  );
};

export default PaintInput;
