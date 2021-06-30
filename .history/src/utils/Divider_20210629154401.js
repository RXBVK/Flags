import React from "react";

export default function Divider(props) {
  return (
    <div
      style={{
        width: `${props.width}%`,
        height: `${props.height}px`,
        backgroundColor: "#03fc80",
      }}
    ></div>
  );
}
