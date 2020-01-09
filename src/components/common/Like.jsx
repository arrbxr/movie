import React from "react";

// Input: liked: boolean
// Output: onClick

const Like = ({ onClick, liked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
