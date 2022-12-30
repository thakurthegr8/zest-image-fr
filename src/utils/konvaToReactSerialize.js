import React from "react";

const templateGenerator = (template, params) => {
  if (template.length != undefined) {
    const children = template.map((item, index) => {
      const props = {
        ...item.props,
        key: index,
        style: {
          ...item.props.style,
        },
      };

      return React.createElement(item.type, props, []);
    });
    return children;
  }
  if (typeof template.children != "object") {
    return React.createElement(template.type, props, template.children);
  }
  const props = {
    ...template.props,
    style: {
      ...template.props.style,
    },
  };
  return React.createElement(
    template.type,
    props,
    templateGenerator(template.children, params)
  );
};

const updatePropsStyle = {
  text: (attr) => {
    return {
      color: attr.fill,
      fontSize: attr.fontSize,
      transform: `translate(${attr.x}px, ${attr.y}px)`,
      position:"absolute"
    };
  },
  layer: (attr) => {
    return {
      height: attr.height,
      width: attr.width,
      display:"flex",
      backgroundColor:"white",
      overflow:"hidden",
      position:"relative"
    };
  },
  ellipse: (attr) => {
    return {
      height: attr.x,
      width: attr.x,
      transform: `translate(${attr.x}px, ${attr.y}px)`,
      backgroundColor: attr.fill,
      borderRadius: "50%",
      position:"absolute"
    };
  },
  rectangle: (attr) => {
    return {
      height: attr.height,
      width: attr.width,
      transform: `translate(${attr.x}px, ${attr.y}px)`,
      backgroundColor: attr.fill,
      position:"absolute"
    };
  },
};

const getType = {
  text: "p",
  layer: "div",
  rectangle: "div",
  ellipse: "div",
};

const konvaToReactSerialize = (obj) => {
  const type = "div";
  //   console.log(obj);
  const parentStyle = updatePropsStyle?.[obj.attrs.title]?.(obj.attrs) || {};
  // console.log(obj.children[0]);
  let children = [];
  if (obj.children[0]) {
    children = obj.children[0].children
      .filter((item) => item.className !== "Transformer")
      .map((item) => {
        const childStyle =
          updatePropsStyle?.[item.attrs.type]?.(item.attrs) || {};
        const childType = getType[item.attrs.type];
        return { type: childType, props: { style: childStyle }, children: [] };
      });
  }
  const result = { type, props: { style: parentStyle }, children };
  //   console.log(result);
  return templateGenerator(result, {});
};

export default konvaToReactSerialize;
