import React, { useContext } from "react";
import { PlaygroundContext } from "../../../contexts/Playground";

const LayerPane = () => {
  const { layers } = useContext(PlaygroundContext);
  return (
    <div className="flex flex-col">
      {layers.map((item, index) => (
        <details>
          <summary>{item.type}</summary>
        </details>
      ))}
    </div>
  );
};

export default LayerPane;
