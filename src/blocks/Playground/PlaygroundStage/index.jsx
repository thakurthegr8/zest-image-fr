import React, { useContext, useState } from "react";
import { Stage, Layer } from "react-konva";
import { PlaygroundContext } from "../../../contexts/Playground";
import { ShapeGenerator } from "../../../utils/shapes";

const initialRectangles = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: "red",
    id: "rect1",
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    fill: "green",
    id: "rect2",
  },
];

const PlaygroundStage = () => {
  const {
    layers,
    frameDimensions,
    selectedShapeId,
    selectShape,
    setLayers,
    setCurrentAction,
  } = useContext(PlaygroundContext);
  const [zoom, setZoom] = useState(1);
  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
      setCurrentAction(0);
    } else {
      setCurrentAction(1);
    }
  };

  return (
    <div className="col-span-3 flex bg-gray-200 justify-center items-center h-screen overflow-hidden">
      <Stage
        width={frameDimensions.width / 2}
        height={frameDimensions.height / 2}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        className="bg-white border"
        style={{ transform: `scale(${zoom})` }}
        title="layer"
      >
        {layers.length !== 0 &&
          layers.map((layer, i) => (
            <Layer key={i}>
              <ShapeGenerator
                type={layer.type}
                shapeProps={layer.params}
                isSelected={i === selectedShapeId}
                onSelect={() => {
                  selectShape(i);
                }}
                onChange={(newAttrs) => {
                  const rects = layers.slice();
                  rects[i] = { ...layer, params: newAttrs };
                  setLayers(rects);
                }}
              />
            </Layer>
          ))}
      </Stage>

      <div className="fixed bottom-0 text-2xl">
        <button onClick={() => setZoom(zoom + 0.1)}>+</button>
        <button onClick={() => setZoom(zoom - 0.1)}>-</button>
      </div>
    </div>
  );
};

export default PlaygroundStage;
