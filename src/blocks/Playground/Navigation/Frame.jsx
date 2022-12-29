import React from "react";
import { useContext } from "react";
import { PlaygroundContext } from "../../../contexts/Playground";

const Frame = () => {
  const { setCurrentAction } = useContext(PlaygroundContext);
  const updateAction = () => {
    setCurrentAction(0);
  };
  return <button onClick={updateAction}>Frame</button>;
};

export default Frame;
