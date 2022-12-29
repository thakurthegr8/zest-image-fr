import React from "react";
import { useContext } from "react";
import { PlaygroundContext } from "../../../contexts/Playground";
import { CheckIcon } from "@heroicons/react/24/solid";

const frames = [
  { type: "Portrait", height: 1600, width: 900 },
  { type: "Widescreen", height: 900, width: 1600 },
  { type: "Square", height: 640, width: 640 },
];

const Frame = () => {
  const { setFrameDimensions, frameDimensions } = useContext(PlaygroundContext);
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
      <h1 className="p-2 text-sm border-b">Frame</h1>
      <form onChange={onChange} className="border-b">
        {frames.map((item, index) => (
          <label
            htmlFor={`frame-type-${index}`}
            className="flex cursor-pointer  justify-between items-center  px-3 py-2 hover:bg-gray-100 group-hover:cursor-pointer transition-all"
          >
            <label
              className="text-sm flex gap-2 cursor-pointer items-center"
              htmlFor={`frame-type-${index}`}
            >
              <span> {item.type}</span>
              <span className="text-xs text-gray-400">
                {item.width}x{item.height}
              </span>
            </label>
            <input
              type="radio"
              name="frameType"
              id={`frame-type-${index}`}
              value={index}
              className="hidden"
            />
            {item.height === frameDimensions.height &&
              item.width === frameDimensions.width && (
                <CheckIcon className="w-5 h-5 text-blue-500" />
              )}
          </label>
        ))}
      </form>
    </>
  );
};

export default Frame;
