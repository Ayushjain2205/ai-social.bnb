import React, { useEffect, useRef } from "react";

const InfiniteCanvas = () => {
  const divCount = Array.from({ length: 120 }, (_, index) => index);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const totalWidth = divCount.length * (150 + 180) - 180;
      const midpointWidth = totalWidth / 2;
      container.scrollLeft = midpointWidth - container.offsetWidth / 2;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[665px] overflow-x-auto hide-scrollbar"
    >
      <div className="grid grid-cols-6 gap-x-[180px] gap-[30px]">
        {divCount.map((index) => (
          <div
            key={index}
            className="h-[150px] w-[150px] rounded-[20px] overflow-hidden bg-black"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCanvas;
