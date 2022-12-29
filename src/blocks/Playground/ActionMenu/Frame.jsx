import React from "react";
import { useContext } from "react";
import { PlaygroundContext } from "../../../contexts/Playground";

const frames = [
  { type: "Portrait", height: 1600, width: 900 },
  { type: "Widescreen", height: 900, width: 1600 },
  { type: "Square", height: 640, width: 640 },
];

const Frame = () => {
  const { setFrameDimensions } = useContext(PlaygroundContext);
  const onChange = (e) => {
    const form = e.target;
    const frameType = +form.value;
    console.log(e.target.value);
    setFrameDimensions({
      width: frames[frameType].width,
      height: frames[frameType].height,
    });
  };
  return (
    <>
      <h1>Frame</h1>
      <form onChange={onChange}>
        {frames.map((item, index) => (
          <div>
            <label htmlFor={`frame-type-${index}`}>{item.type}</label>
            <input
              type="radio"
              name="frameType"
              id={`frame-type-${index}`}
              value={index}
            />
          </div>
        ))}
      </form>
    </>
  );
};

export default Frame;
