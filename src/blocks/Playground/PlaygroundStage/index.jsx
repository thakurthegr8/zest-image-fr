import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Stage, Layer } from "react-konva";
import { deserialize, serialize } from "react-serialize/lib";
import { PlaygroundContext } from "../../../contexts/Playground";
import konvaToReactSerialize from "../../../utils/konvaToReactSerialize";
import { ShapeGenerator } from "../../../utils/shapes";

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
  const [template, setTemplate] = useState(null);
  const stageRef = useRef(null);
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
  useEffect(() => {
    setTemplate(konvaToReactSerialize(JSON.parse(stageRef.current?.toJSON())));
  }, [stageRef.current?.toJSON()]);
  return (
    <div
      className="col-span-3 flex bg-gray-100 justify-center items-center h-screen overflow-hidden"
    >
      <Stage
        width={frameDimensions.width / 2}
        height={frameDimensions.height / 2}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        className="bg-white border"
        style={{ transform: `scale(${zoom})` }}
        title="layer"
        ref={stageRef}
      >
        <Layer>
          {layers.length !== 0 &&
            layers.map((layer, i) => (
              <ShapeGenerator
                key={i}
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
            ))}
        </Layer>
      </Stage>

      <div className="fixed bottom-0 text-2xl">
        <button onClick={() => setZoom(zoom + 0.1)}>+</button>
        <button onClick={() => setZoom(zoom - 0.1)}>-</button>
      </div>
      {template && deserialize(template)}
    </div>
  );
};

export default PlaygroundStage;
