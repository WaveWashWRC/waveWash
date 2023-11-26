import React from "react";

const CustomButton = ({ onClick, text, additionalClasses }) => {
  // Define base Tailwind CSS classes for a button
  const baseClasses =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  // Concatenate additional classes if provided
  const buttonClasses = additionalClasses
    ? `${baseClasses} ${additionalClasses}`
    : baseClasses;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
