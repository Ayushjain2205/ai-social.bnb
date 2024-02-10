import React, { useRef, useEffect, useState } from "react";

const InfiniteCanvas2 = () => {
  const divCount = Array.from({ length: 120 }, (_, index) => index);
  const containerRef = useRef(null);
  const [imageInView, setImageInView] = useState(
    new Array(divCount.length).fill(false)
  );

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const totalWidth = divCount.length * (150 + 180) - 180;
      const midpointWidth = totalWidth / 2;
      container.scrollLeft = midpointWidth - container.offsetWidth / 2;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageInView((prevState) => {
                const newState = [...prevState];
                newState[entry.target.dataset.index] = true;
                return newState;
              });
            }
          });
        },
        {
          root: container,
          threshold: 0.1,
        }
      );

      const items = container.querySelectorAll(".lazy-load");
      items.forEach((item) => observer.observe(item));

      return () => items.forEach((item) => observer.unobserve(item));
    }
  }, []);

  // Function to generate a random image URL or a placeholder
  const getImageUrl = (index, inView) => {
    if (!inView) {
      return `https://via.placeholder.com/150`; // Placeholder image URL
    }
    // Actual image URL with cache busting
    return `https://picsum.photos/seed/${index + new Date().getTime()}/150`;
  };

  return (
    <div className="w-[390px]">
      <div
        ref={containerRef}
        className="h-[665px] overflow-x-auto hide-scrollbar"
      >
        <div className="grid grid-cols-6 gap-x-[180px] gap-[30px]">
          {divCount.map((index) => (
            <div
              key={index}
              data-index={index}
              className="h-[150px] w-[150px] rounded-[8px] overflow-hidden lazy-load"
            >
              <img
                src={getImageUrl(index, imageInView[index])}
                alt="Random"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCanvas2;
