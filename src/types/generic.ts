import { SelectChangeEvent } from "@mui/material";
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";

export interface IShapeImage {
  title: string;
  src: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export interface IPaintFormText {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  value: number;
}

export interface IFormChangeHandler {
  (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<number>,
    label: string
  ): void;
}

export interface IPaintFormInput {
  value: number;
  onChange: (event: SelectChangeEvent<number>, child: ReactNode) => void;
  items: Array<number>;
}

export interface IPaintCans {
  paintCans: Array<number>;
}
