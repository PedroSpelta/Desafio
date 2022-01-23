import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { defaultWall } from '../../constants/wall';
import { IWall, IWallForm } from '../../types/wall';

const PaintForm:React.FC<IWallForm> = ({walls,setWalls, wallNumber}) => {
  const [localSize, setLocalSize] = useState<IWall>(defaultWall);

  const inputToNumber = (input: string) => {
    if (input.length > 4) return Number(input.slice(0, -1));
    return Number(input.replace(/[^0-9]/g, ""));
  };

  const localToStateSize = () => {
    // const invalidArea = validateArea(localSize);
    // if (invalidArea) return alert(invalidArea);
    // const invalidDoors = validateDoors(localSize);
    // if (invalidDoors) return alert(invalidDoors);

    
    return setWalls((state) => {
      const newState = [...state];
      newState[wallNumber] = localSize;
      return newState;
    });
  };

  return <div>
    <FormControl>
        <TextField
          label="Height"
          size="small"
          sx={{ m: 1, width: "14ch", height: "ch" }}
          value={localSize.height}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
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
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
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
          <Select
            labelId="windows-label"
            label="Windows"
            value={localSize.windows}
            onChange={(e) =>
              setLocalSize((state) => ({
                ...state,
                windows: Number(e.target.value),
              }))
            }
          >
            <MenuItem value={0}>0</MenuItem>

            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: "14ch" }} size="small">
          <InputLabel id="doors-label">Doors</InputLabel>
          <Select
            labelId="doors-label"
            label="Doors"
            value={localSize.doors}
            onChange={(e) =>
              setLocalSize((state) => ({
                ...state,
                doors: Number(e.target.value),
              }))
            }
          >
            <MenuItem value={0}>0</MenuItem>

            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="text"
          type="submit"
          onClick={localToStateSize}
          onSubmit={localToStateSize}
        >
          Change
        </Button>
      </FormControl>
  </div>;
}

export default PaintForm;
