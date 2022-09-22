import React, { forwardRef } from "react";

const ForwadLabel = forwardRef(({ children }, ref) => {
  return <label ref={ref}>{children}</label>;
});

export default ForwadLabel;
