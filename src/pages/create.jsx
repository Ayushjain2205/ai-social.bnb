import React, { useEffect, useRef } from "react";
import Page from "../components/Layout/Page";
import CreateCard from "../components/UI/CreateCard";

const create = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // Calculate the position to scroll to: (total width of the cards - container width) / 2
      const scrollPosition =
        (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
      scrollContainer.scrollLeft = scrollPosition;
    }
  }, []);

  return (
    <Page back="/" color="#262626">
      <div
        ref={scrollContainerRef}
        className="flex hide-scrollbar gap-[20px] overflow-x-scroll mt-[50px] "
      >
        <CreateCard
          name="TUNESSSSS"
          description="users generate fun audio of all genres"
          imageUrl="/images/create/create1.svg"
          type="audio"
        />
        <CreateCard
          name="REAL TIME VISUALS"
          description="Users comment a word and this model generates that image in real time."
          imageUrl="/images/create/create2.svg"
          type="image"
        />
        <CreateCard
          name="SCRIBBLIO"
          description="Users draw randomly generated prompts and guess what other people drew."
          imageUrl="/images/create/create3.svg"
          type="image"
        />
      </div>
    </Page>
  );
};

export default create;
