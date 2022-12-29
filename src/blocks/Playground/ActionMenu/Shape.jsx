import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { PlaygroundContext } from "../../../contexts/Playground";

const Shape = () => {
  const { layers, selectedShapeId, setLayers } = useContext(PlaygroundContext);
  const [currentShape, setCurrentShape] = useState(
    layers[selectedShapeId ? selectedShapeId : 0]
  );
  useEffect(() => {
    if (selectedShapeId) {
      setCurrentShape(layers[selectedShapeId]);
    }
    console.log(currentShape);
  }, [selectedShapeId]);
  const setColor = (e) => {
    let updatedLayers = layers;
    const updatedShape = {
      ...layers[selectedShapeId],
      params: { ...layers[selectedShapeId].params, fill: e.target.value },
    };
    setCurrentShape(updatedShape);
    updatedLayers = layers.map((item, index) =>
      index === selectedShapeId ? updatedShape : item
    );
    setLayers(updatedLayers);
  };
  return (
    <div>
      <h1>Shape</h1>
      <input
        type="color"
        onChange={setColor}
        value={currentShape.params.fill}
      />
      {selectedShapeId}
    </div>
  );
};

export default Shape;
