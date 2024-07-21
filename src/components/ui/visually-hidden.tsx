import React from "react";

const VisuallyHidden: React.FC<React.HTMLProps<HTMLSpanElement>> = ({ children, ...props }) => (
  <span
    style={{
      position: "absolute",
      width: "1px",
      height: "1px",
      margin: "-1px",
      padding: "0",
      border: "0",
      clip: "rect(0, 0, 0, 0)",
      overflow: "hidden",
      whiteSpace: "nowrap",
      wordWrap: "normal",
    }}
    {...props}
  >
    {children}
  </span>
);

export default VisuallyHidden;