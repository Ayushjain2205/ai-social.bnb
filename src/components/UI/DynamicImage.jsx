import React, { useState, useEffect } from "react";

const images = [
  "/images/explore/EXPLORE5.png",
  "/images/explore/EXPLORE4.png",
  "/images/explore/EXPLORE3.png",
  "/images/explore/EXPLORE6.png",
  "/images/explore/EXPLORE7.png",
  "/images/explore/EXPLORE8.png",
  "/images/food/FOOD1.png",
  "/images/food/FOOD2.png",
  "/images/food/FOOD3.png",
  "/images/food/FOOD4.png",
];

const DynamicImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  return (
    <div>
      <img
        className="rounded-[8px] fade-in"
        src={images[currentIndex]}
        alt=""
        key={currentIndex}
      />
    </div>
  );
};

export default DynamicImage;
