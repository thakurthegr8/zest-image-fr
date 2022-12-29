import React from "react";
import { useContext } from "react";
import { PlaygroundContext } from "../../../contexts/Playground";
import playgroundActions from "../../../utils/playgroundActions";

const ActionMenu = () => {
  const { currentAction } = useContext(PlaygroundContext);
  const { Component } =
    playgroundActions[currentAction < 0 ? 0 : currentAction];
  return (
    <div>
      <div className="p-2 border-b">
        <h1 className="text-sm">Design</h1>
      </div>
      {currentAction >= 0 && playgroundActions[currentAction].type && (
        <Component />
      )}
    </div>
  );
};

export default ActionMenu;
