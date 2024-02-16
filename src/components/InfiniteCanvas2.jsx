import React, { useRef, useEffect, useState } from "react";

const InfiniteCanvas2 = () => {
  const divWidth = 150; // The width of each div
  const gapWidth = 180; // The width of the gap between divs
  const divsPerRow = 6; // Number of divs per row
  // Calculate the width of one row, accounting for the divs and the gaps between them
  const rowWidth = divWidth * divsPerRow + gapWidth * (divsPerRow - 1);

  // Generate the divCount array with 120 elements
  const divCount = Array.from({ length: 120 }, (_, index) => index);
  const containerRef = useRef(null);
  // useState to track which images are in view
  const [imageInView, setImageInView] = useState(
    new Array(divCount.length).fill(false)
  );

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;

      // Calculate the midpoint scroll position based on the width of one row
      const midpointScrollPosition = rowWidth / 2 - container.offsetWidth / 2;

      console.log(midpointScrollPosition);
      // Set the initial scroll position to the calculated midpoint
      container.scrollLeft = midpointScrollPosition / 2;

      // Create an IntersectionObserver to track which divs are in view
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

      // Select all the .lazy-load elements and observe them
      const items = container.querySelectorAll(".lazy-load");
      items.forEach((item) => observer.observe(item));

      // Cleanup function to unobserve the items when the component unmounts
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
        <div className="grid grid-cols-6 gap-x-[180px] gap-y-[30px]">
          {divCount.map((index) => (
            <Link href="/post">
              <div
                key={index}
                data-index={index}
                className="h-[150px] w-[150px] rounded-[8px] overflow-hidden lazy-load"
              >
                <img
                  src={getImageUrl(index, imageInView[index])}
                  alt={`Content ${index}`}
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
