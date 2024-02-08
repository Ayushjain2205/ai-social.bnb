import React from "react";

const InfiniteCanvas = () => {
  // Create an array with 120 elements (indexes 0 to 119)
  const divCount = Array.from({ length: 120 }, (_, index) => index);

  return (
    <div className="h-[665px] overflow-x-auto">
      <div className="grid grid-cols-8 gap-x-32 gap-y-4">
        {divCount.map((index) => (
          <div
            key={index}
            className="h-[100px] w-[100px] rounded-[20px] bg-black"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCanvas;
