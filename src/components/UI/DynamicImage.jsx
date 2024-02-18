import React, { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/dwwcarx9g/image/upload/v1708289732/feed/explore/v7ufe6tlcgxu2ix2rqe9.png",
  "https://res.cloudinary.com/dwwcarx9g/image/upload/v1708285179/feed/explore/zlwmelrfwyddwmapzl9i.png",
  "https://res.cloudinary.com/dwwcarx9g/image/upload/v1708289732/feed/explore/c40dcl3hsrxlrjuqfufq.png",
  "https://res.cloudinary.com/dwwcarx9g/image/upload/v1708285177/feed/explore/dlymtsyggboeqrtp57uv.png",
  "https://res.cloudinary.com/dwwcarx9g/image/upload/v1708289732/feed/explore/sdhcfmlbu6npm83tjs7v.png",
  "https://res.cloudinary.com/dwwcarx9g/image/upload/v1708285177/feed/explore/cdv5qb0zzof0qfjy5ysw.png",
  "https://res.cloudinary.com/dwwcarx9g/image/upload/v1708285176/feed/explore/okopi91todzwmczern2o.png",
  "https://res.cloudinary.com/dwwcarx9g/image/upload/v1708285178/feed/explore/gwkultyyp4ueuppxqtny.png",
  "https://res.cloudinary.com/dwwcarx9g/image/upload/v1708289723/feed/explore/cgkm7havxmyyx7cajtzo.png",
  "https://res.cloudinary.com/dwwcarx9g/image/upload/v1708285176/feed/explore/d77krrethkx11tl2vynj.png",
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
