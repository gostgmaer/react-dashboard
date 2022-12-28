import React from "react";

const ToggleItem = () => {
  return (
    <div className="ToggleElements">
      <ul className="toggleItems">
        {Array.from(Array(5).keys()).map((item, index) => (
          <li key={index} className="item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleItem;
