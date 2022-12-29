import { WindowIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useContext } from "react";
import { PlaygroundContext } from "../../../contexts/Playground";

const Frame = () => {
  const { setCurrentAction, currentAction } = useContext(PlaygroundContext);
  const updateAction = () => {
    setCurrentAction(0);
  };
  return (
    <button
      onClick={updateAction}
      className={`p-1  ${
        currentAction === 0
          ? "bg-blue-500 text-white hover:bg-black"
          : "hover:bg-gray-100"
      }`}
    >
      <WindowIcon className="w-8" />
    </button>
  );
};

export default Frame;
