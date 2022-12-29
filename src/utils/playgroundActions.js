import { Layer, Circle, Rect } from "react-konva";
import Frame from "../blocks/Playground/ActionMenu/Frame";
import Shape from "../blocks/Playground/ActionMenu/Shape";
export default [
  {
    type: "frame",
    text: "frame",
    Component: () => <Frame />,
  },
  {
    type: "shape",
    text: "Shape",
    Component: () => <Shape />,
  },
];
