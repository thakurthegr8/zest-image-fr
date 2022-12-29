import React, { createContext, useState } from "react";
import playgroundActions from "../utils/playgroundActions";
import shapes from "../utils/shapes";

export const PlaygroundContext = createContext(null);

const PlaygroundProvider = ({ children }) => {
  const [layers, setLayers] = useState([]);
  const [currentAction, setCurrentAction] = useState(-1);
  const [selectedShapeId, selectShape] = useState(null);
  const [frameDimensions, setFrameDimensions] = useState({
    width: 0,
    height: 0,
  });
  const addComponent = (newComponentId) => {
    setLayers([...layers, shapes[newComponentId]]);
  };
  return (
    <PlaygroundContext.Provider
      value={{
        layers,
        setLayers,
        currentAction,
        frameDimensions,
        setFrameDimensions,
        setCurrentAction,
        selectShape,
        selectedShapeId,
        actions: { addComponent },
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundProvider;
