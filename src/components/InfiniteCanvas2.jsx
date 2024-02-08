import React from "react";

const InfiniteCanvas2 = () => {
  const divCount = Array.from({ length: 120 }, (_, index) => index);

  // Function to generate a random image URL
  const getRandomImageUrl = (index) => {
    // Using Picsum.photos to generate random images.
    // Adding index to ensure URL changes for cache busting in case of re-renders
    return `https://picsum.photos/seed/${index + new Date().getTime()}/150`;
  };

  return (
    <div className="h-[665px] overflow-x-auto">
      <div className="grid grid-cols-6 gap-x-[180px] gap-[30px]">
        {divCount.map((index) => (
          <div
            key={index}
            className="h-[150px] w-[150px] rounded-[20px] overflow-hidden"
          >
            <img
              src={getRandomImageUrl(index)}
              alt="Random"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCanvas2;
