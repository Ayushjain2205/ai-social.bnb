import React from "react";

const Page = ({ children, back = false, isGridView = false }) => {
  const childContentClasses = isGridView
    ? "absolute top-0 w-full"
    : "mt-[56px]";
  return (
    <div className="relative flex flex-col items-center h-[665px] w-[390px]">
      <div className="flex flex-row w-full justify-between absolute top-0 pt-[12px] px-[16px] z-50">
        <div className="flex flex-col items-center justify-center w-[40px] h-[40px] rounded-full bg-[#616161]">
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
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-col w-[90px] h-[40px] rounded-full bg-[#616161]"></div>
          <div className="flex flex-col w-[40px] h-[40px] rounded-full bg-[#616161]"></div>
        </div>
      </div>
      <div className={childContentClasses}>{children}</div>
    </div>
  );
};

export default Page;
