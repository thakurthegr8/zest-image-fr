import React from "react";
import LayerPane from "./blocks/Playground/LayerPane";
import PlaygroundNavigation from "./blocks/Playground/Navigation";
import PlaygroundStage from "./blocks/Playground/PlaygroundStage";
import ActionMenu from "./blocks/Playground/ActionMenu";

function App() {
  return (
    <div className="flex flex-col">
      <PlaygroundNavigation />
      <section className="grid grid-cols-5 divide-x">
        <LayerPane />
        <PlaygroundStage />
        <ActionMenu />
      </section>
    </div>
  );
}

export default App;
