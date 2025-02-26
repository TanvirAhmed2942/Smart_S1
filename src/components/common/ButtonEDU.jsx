import React from "react";

const ButtonEDU = ({ actionType, onClick }) => {
  const getButtonStyles = () => {
    switch (actionType) {
      case "cancel":
        return "bg-transparent text-[#18a0fb] w-28 h-10 rounded-md border border-[#18a0fb] transition-all duration-300 hover:bg-[#18a0fb] hover:text-white";
      case "delete":
        return "bg-red-600 text-white w-28 h-10 rounded-md border border-red-600 hover:border-red-500 hover:bg-red-500 transition-all duration-300";
      case "save":
        return "bg-[#18a0fb] text-white w-28 h-10 rounded-md border border-[#18a0fb] transition-all duration-300 hover:bg-transparent hover:text-[#18a0fb]";
      case "add New":
        return "bg-[#18a0fb] text-white w-28 h-10 rounded-md border border-[#18a0fb] transition-all duration-300 hover:bg-transparent hover:text-[#18a0fb]";
      case "update":
        return "bg-[#18a0fb] text-white w-28 h-10 rounded-md border border-[#FFC301] transition-all duration-300 hover:bg-transparent hover:text-[#FFC301]";
      default:
        return "bg-[18a0fb] text-[#FFC301] w-28 h-10 rounded-md border border-[#FFC301] transition-all duration-300 hover:bg-[#FFC301] hover:text-white";
    }
  };

  return (
    <button className={getButtonStyles()} onClick={onClick}>
      {actionType.charAt(0).toUpperCase() + actionType.slice(1)}
    </button>
  );
};

export default ButtonEDU;
