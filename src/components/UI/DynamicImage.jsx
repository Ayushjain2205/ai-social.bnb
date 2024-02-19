import React, { useState, useEffect } from "react";
import { postData } from "../../helpers/postdata";

// Filter postData for entries with remixid="weird-food" and map to their src attributes
const weirdFoodImages = postData
  .filter((post) => post.remixid === "weird-food")
  .map((post) => post.src);

const DynamicImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % weirdFoodImages.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  return (
    <div>
      <img
        className="rounded-[8px] fade-in"
        src={weirdFoodImages[currentIndex]}
        alt=""
        key={currentIndex}
      />
    </div>
  );
};

export default DynamicImage;
