import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Xpattern from "./UI/Xpattern";

const InfiniteCanvas2 = () => {
  const [showXPattern, setShowXPattern] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowXPattern(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  // Function to generate array of image URLs
  const generateImageUrls = () => {
    const imageUrls = [];
    for (let i = 1; i <= 18; i++) {
      imageUrls.push(`/images/explore/EXPLORE${i}.png`);
    }
    return imageUrls;
  };

  // Function to randomize and repeat images
  const randomizeAndRepeatImages = (imageUrls, totalDivs) => {
    let extendedImages = [];
    while (extendedImages.length < totalDivs) {
      const randomized = [...imageUrls].sort(() => 0.5 - Math.random());
      extendedImages = [...extendedImages, ...randomized];
    }
    return extendedImages.slice(0, totalDivs);
  };

  const divCount = 120;
  const randomizedImages = randomizeAndRepeatImages(
    generateImageUrls(),
    divCount
  );

  return (
    <div className="relative w-[390px]">
      {showXPattern && <Xpattern />}

      <div className="h-[665px] overflow-x-auto hide-scrollbar">
        <div className="grid grid-cols-6 gap-x-[180px] gap-y-[30px]">
          {Array.from({ length: divCount }).map((_, index) => (
            <Link href="/post" key={index}>
              <div className="h-[150px] w-[150px] rounded-[8px] overflow-hidden">
                <img
                  src={randomizedImages[index]}
                  alt={`Content ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCanvas2;
