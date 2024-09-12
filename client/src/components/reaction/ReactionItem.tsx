import React from "react";
import { FaHeart } from "react-icons/fa";
const ReactionItem = () => {
  return (
    <div className="flex justify-center w-fit items-center">
      <div className="">
        <FaHeart className="text-2xl" />
        <p className="text-xs">Love</p>
      </div>
      <div className="ml-1 font-bold">10</div>
    </div>
  );
};

export default ReactionItem;
