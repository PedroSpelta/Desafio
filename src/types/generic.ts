import { MouseEventHandler } from "react";

export interface IShapeImage {
  title: string;
  src: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}
