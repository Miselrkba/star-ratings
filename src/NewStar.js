import React from "react";

export const NewStar = ({
  isFilled,
  color,
  value,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <>
      <span
        style={{ color }}
        onMouseEnter={() => handleClick(value)}
        onMouseLeave={() => handleMouseEnter(value)}
        onClick={() => handleMouseLeave(value)}
      >
        {isFilled ? "☻" : "☺"}
      </span>
    </>
  );
};
