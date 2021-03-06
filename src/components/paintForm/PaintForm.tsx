import { Button, FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import { defaultDoor, defaultWall, defaultWindow } from "../../constants/wall";
import { IFormChangeHandler } from "../../types/generic";
import { IWall, IWallForm } from "../../types/wall";
import PaintFormInput from "./PaintFormInput";
import PaintFormText from "./PaintFormText";

const PaintForm: React.FC<IWallForm> = ({ walls, setWalls, wallNumber }) => {
  const [localSize, setLocalSize] = useState<IWall>(walls[wallNumber]);

  useEffect(() => {
    setLocalSize(walls[wallNumber]);
  }, [wallNumber, walls]);

  const inputToNumber = (input: string | number) => {
    if (typeof input === "number") return input;
    else if (input.length > 4) return Number(input.slice(0, -1));
    return Number(input.replace(/[^0-9]/g, ""));
  };

  const getArea = () => {
    const { height, width, windows, doors } = localSize;
    const baseArea = height * width;
    const noPaintArea =
      defaultWindow.area * localSize.windows +
      defaultDoor.area * localSize.doors;
    return baseArea - noPaintArea;
  };

  const localToStateSize = () => {
    // const invalidArea = validateArea(localSize);
    // if (invalidArea) return alert(invalidArea);
    // const invalidDoors = validateDoors(localSize);
    // if (invalidDoors) return alert(invalidDoors);

    return setWalls((state) => {
      const newState = [...state];
      newState[wallNumber] = { ...localSize, area: getArea() };
      return newState;
    });
  };

  const formChangeHandler: IFormChangeHandler = (event, label) => {
    setLocalSize((state) => ({
      ...state,
      [label]: inputToNumber(event.target.value),
    }));
  };

  return (
    <div className=" mt-10">
      <FormControl>
        <PaintFormText
          label="Height"
          onChange={(e) => formChangeHandler(e, "height")}
          value={localSize.height}
        />
        <PaintFormText
          label="Width"
          onChange={(e) => formChangeHandler(e, "width")}
          value={localSize.width}
        />
        <PaintFormInput
          value={localSize.windows}
          onChange={(e) => formChangeHandler(e, "windows")}
          items={[0, 1, 2, 3]}
        />
        <PaintFormInput
          value={localSize.doors}
          onChange={(e) => formChangeHandler(e, "doors")}
          items={[0, 1, 2, 3]}
        />

        <Button
          variant="text"
          type="submit"
          onClick={localToStateSize}
          onSubmit={localToStateSize}
        >
          Change
        </Button>
      </FormControl>
    </div>
  );
};

export default PaintForm;
