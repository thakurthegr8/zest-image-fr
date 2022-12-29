import React, { useContext } from "react";
import { PlaygroundContext } from "../../../contexts/Playground";
import playgroundActions from "../../../utils/playgroundActions";
import Frame from "./Frame";
import Shape from "./Shape";
import Text from "./Text";

const MenuItem = ({ menuContext }) => {
  return <button>{menuContext.text}</button>;
};

const PlaygroundNavigation = () => {
  const { actions } = useContext(PlaygroundContext);
  return (
    <div className="border-b flex items-center">
      <Frame />
      <Shape />
      <Text />
    </div>
  );
};

export default PlaygroundNavigation;
