import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { IPaintFormInput } from "../../types/generic";

const PaintFormInput: React.FC<IPaintFormInput> = ({
  value,
  onChange,
  items,
}) => {
  return (
    <FormControl sx={{ m: 1, width: "14ch" }} size="small">
      <InputLabel id="windows-label">Windows</InputLabel>
      <Select
        labelId="windows-label"
        label="Windows"
        value={value}
        onChange={onChange}
      >
        {items.map((item) => (
          <MenuItem value={item} key={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PaintFormInput;
