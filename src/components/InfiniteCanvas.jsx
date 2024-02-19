import React, { useState, useEffect } from "react";
import Link from "next/link";
import Xpattern from "./UI/Xpattern";
import { postData } from "../helpers/postdata";

// Add the `remixed` prop to the component signature
const InfiniteCanvas = ({ remixid = null }) => {
  const [showXPattern, setShowXPattern] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowXPattern(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  // Function to randomize and repeat post thumbnails
  const randomizeAndRepeatThumbnails = (posts, totalDivs) => {
    let extendedThumbnails = [];
    while (extendedThumbnails.length < totalDivs) {
      const randomized = [...posts].sort(() => 0.5 - Math.random());
      extendedThumbnails = [...extendedThumbnails, ...randomized];
    }
    return extendedThumbnails.slice(0, totalDivs);
  };

  const divCount = 120; // Define the total number of divs/thumbnails you want to display

  // Filter posts by the `remixed` tag if it is provided
  const filteredPosts = remixid
    ? postData.filter((post) => post.remixid === remixid)
    : postData;

  const randomizedThumbnails = randomizeAndRepeatThumbnails(
    filteredPosts,
    divCount
  );

  return (
    <div className="relative w-[390px]">
      {showXPattern && <Xpattern />}
      <div className="h-[665px] overflow-x-auto hide-scrollbar">
        <div className="grid grid-cols-6 gap-x-[180px] gap-y-[30px]">
          {randomizedThumbnails.map((post, index) => (
            <Link href={`/post/${post.id}`} key={index}>
              <div className="block h-[150px] w-[150px] rounded-[8px] overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={`Content ${post.title}`}
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

export default InfiniteCanvas;
