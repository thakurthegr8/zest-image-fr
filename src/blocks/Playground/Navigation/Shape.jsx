import React, { useEffect } from "react";
import { useContext } from "react";
import { PlaygroundContext } from "../../../contexts/Playground";
import shapes from "../../../utils/shapes";

const Shape = () => {
  const { setCurrentAction, actions } = useContext(PlaygroundContext);
  const setShapeMode = (e) => {
    setCurrentAction(1);
    actions.addComponent(e.target.value);
  };
  return (
    <div>
      <select onChangeCapture={setShapeMode}>
        {shapes.map((item, index) => (
          <option value={index}>{item.type}</option>
        ))}
      </select>
    </div>
  );
};

export default Shape;
