import React, { useContext } from "react";
import { PlaygroundContext } from "../../../contexts/Playground";

const Text = () => {
  const { setCurrentAction, actions } = useContext(PlaygroundContext);
  const addText = () => {
    actions.addComponent(2);
  };
  return <button onClick={addText}>Text</button>;
};

export default Text;
