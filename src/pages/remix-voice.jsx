import React from "react";

const remix = () => {
  return (
    <div className="flex flex-col mt-[16px]">
      <div className="flex flex-row w-full justify-between absolute top-0 pt-[12px] px-[16px] z-50">
        {/* Conditionally render back arrow or an empty div to maintain layout */}

        <div className="flex flex-col items-center justify-center w-[40px] h-[40px] rounded-full bg-[#616161] opacity-70 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.8926 12.6653C22.8926 12.4663 22.8136 12.2756 22.6729 12.1349C22.5323 11.9943 22.3415 11.9153 22.1426 11.9153H4.45308L9.17358 7.19625C9.31441 7.05542 9.39353 6.86442 9.39353 6.66525C9.39353 6.46609 9.31441 6.27508 9.17358 6.13425C9.03275 5.99342 8.84174 5.91431 8.64258 5.91431C8.44341 5.91431 8.25241 5.99342 8.11158 6.13425L2.11158 12.1343C2.04173 12.2039 1.98632 12.2867 1.94851 12.3778C1.9107 12.4689 1.89124 12.5666 1.89124 12.6653C1.89124 12.7639 1.9107 12.8616 1.94851 12.9527C1.98632 13.0438 2.04173 13.1266 2.11158 13.1963L8.11158 19.1963C8.25241 19.3371 8.44341 19.4162 8.64258 19.4162C8.84174 19.4162 9.03275 19.3371 9.17358 19.1963C9.31441 19.0554 9.39353 18.8644 9.39353 18.6653C9.39353 18.4661 9.31441 18.2751 9.17358 18.1343L4.45308 13.4153H22.1426C22.3415 13.4153 22.5323 13.3362 22.6729 13.1956C22.8136 13.0549 22.8926 12.8642 22.8926 12.6653Z"
              fill="white"
            />
          </svg>
        </div>

        {/* all icons top right */}
        <div className="flex flex-row gap-4 ml-[110px]">
          <div className="flex flex-col items-center justify-center w-[40px] h-[40px] rounded-full bg-[#616161] opacity-70">
            <img src="/images/draw.svg" />
          </div>

          <div className="flex flex-col items-center justify-center w-[40px] h-[40px] rounded-full bg-[#616161] opacity-70">
            <img src="/images/mic.svg" />
          </div>

          <div className="flex flex-col items-center justify-center w-[40px] h-[40px] rounded-full bg-[#616161] opacity-70">
            <img src="/images/camera.svg" />
          </div>

          <div className="flex flex-col items-center justify-center w-[40px] h-[40px] rounded-full bg-[#616161] opacity-70">
            <img src="/images/type.svg" />
          </div>
        </div>
      </div>
      {/* collaboration between profiles */}
      <div className="flex flex-row gap-2 mt-[10px]">
        <div className="flex flex-row gap-[5px] items-center h-[35px] mt-[40px] border-black px-[16px]">
          <img className="w-[20px] h-[20]" src="/images/avatar.png" alt="" />
          <span className="text-[12px] font-medium">ishikapareek</span>
        </div>

        <div>
          <img
            className="items-center gap-5 mt-[48px]"
            src="/images/shuffle.svg"
          />
        </div>

        <div className="flex flex-row gap-[8px] items-center h-[35px] mt-[40px] border-black px-[16px]">
          <img className="w-[20px] h-[20]" src="/images/avatar2.svg" alt="" />
          <span className="text-[12px] font-medium"> ayushjain</span>
        </div>
      </div>
      {/* profile & caption */}
      <div className="flex flex-row gap-2 ml-4 mt-[8px]">
        <img
          className="rounded-4 w-[40px] h-[40px]"
          src="/images/remixedpost.png"
        />
        <div>
          <div className="text-[12px] w-[297px]">
            music generation/
            <span style={{ color: "#FF5705" }}>robot</span>
          </div>

          <div>
            <p className="text-[12px] text-[#262626] opacity-70 mt-[4px] ">
              generate a tune of a particular genre
            </p>
          </div>
        </div>
      </div>

      {/* generated post */}
      <div>
        <div className="mx-[10px] mt-[12px] w-[370px] h-[358px] bg-[#D9D9D9] rounded-[8px]"></div>
      </div>

      {/* textbox */}
      <div className="flex justify-center mt-[8px] items-center">
        <div className="flex flex-row items-center pr-[12px] rounded-[6px] border-[0.5px] border-[#909090] bg-transparent w-[370px] h-[40px] ">
          <svg
            className=" ml-[340px] items-center"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M0.417969 3.84033C0.417969 3.04468 0.734039 2.28162 1.29665 1.71901C1.85926 1.1564 2.62232 0.840332 3.41797 0.840332L21.418 0.840332C22.2136 0.840332 22.9767 1.1564 23.5393 1.71901C24.1019 2.28162 24.418 3.04468 24.418 3.84033V21.8403C24.418 22.636 24.1019 23.399 23.5393 23.9617C22.9767 24.5243 22.2136 24.8403 21.418 24.8403H3.41797C2.62232 24.8403 1.85926 24.5243 1.29665 23.9617C0.734039 23.399 0.417969 22.636 0.417969 21.8403V3.84033ZM8.66797 18.8403C8.66793 18.9849 8.70968 19.1264 8.78818 19.2478C8.86669 19.3692 8.97861 19.4653 9.11047 19.5246C9.24233 19.5839 9.38851 19.6038 9.53142 19.5819C9.67433 19.56 9.80787 19.4973 9.91597 19.4013L16.666 13.4013C16.7453 13.331 16.8088 13.2446 16.8522 13.1479C16.8957 13.0512 16.9182 12.9464 16.9182 12.8403C16.9182 12.7343 16.8957 12.6295 16.8522 12.5328C16.8088 12.4361 16.7453 12.3497 16.666 12.2793L9.91597 6.27933C9.80787 6.18334 9.67433 6.12063 9.53142 6.09876C9.38851 6.07689 9.24233 6.09679 9.11047 6.15607C8.97861 6.21534 8.86669 6.31146 8.78818 6.43286C8.70968 6.55426 8.66793 6.69576 8.66797 6.84033V18.8403Z"
              fill="#909090"
            />
          </svg>
        </div>
      </div>

      {/* post button and redo */}
      <div className="bg-white flex flex-row h-[60px] mb-0 justify-between items-center mt-[30px]">
        <button className="bg-none text-[#FF5705] h-[40px] text-[16px] ml-[12px] ">
          Redo
        </button>
        <button className="bg-[#262626] w-[130px] h-[40px] mr-[12px]  rounded-[8px] text-white ">
          Post
        </button>
      </div>
    </div>
  );
};

export default remix;
