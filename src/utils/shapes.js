import { useRef, Fragment, useEffect } from "react";
import { Rect, Circle, Layer, Transformer, Text } from "react-konva";

export const ShapeGenerator = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  type,
}) => {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  const params = {
    type: type,
    onClick: onSelect,
    onTap: onSelect,
    ref: shapeRef,
    ...shapeProps,
    draggable: true,
    onDragEnd: (e) => {
      onChange({
        ...shapeProps,
        x: e.target.x(),
        y: e.target.y(),
      });
    },
    onTransformEnd: (e) => {
      const node = shapeRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();

      // we will reset it back
      node.scaleX(1);
      node.scaleY(1);
      onChange({
        ...shapeProps,
        x: node.x(),
        y: node.y(),
        // set minimal value
        width: Math.max(5, node.width() * scaleX),
        height: Math.max(node.height() * scaleY),
      });
    },
  };
  return (
    <Fragment>
      {type === "ellipse" && <Circle {...params} />}
      {type === "rectangle" && <Rect {...params} />}
      {type === "text" && <Text {...params} />}
      {isSelected && (
        <Transformer
          keepRatio={false}
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </Fragment>
  );
};

export default [
  {
    type: "ellipse",
    params: {
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      fill: "#c2c3f2",
    },
  },
  {
    type: "rectangle",
    params: {
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      fill: "#c2c3f2",
    },
  },
  {
    type: "text",
    params: {
      fontSize: 20,
      text: "Add New Text",
      fill: "#000000",
    },
  },
];
