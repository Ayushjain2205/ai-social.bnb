import React, { useEffect } from "react";
import Link from "next/link";

function InteractivePosts() {
  return (
    <div className="flex flex-col justify-center items-center h-[665px] w-[390px]">
      <div className="absolute top-[56px]">
        <div>
          <img
            className="w-[90px] h-[90px] left-[100px] top-[200px] right-[50px] shiver"
            src="/images/ourmascot.svg"
            alt="Mascot"
          />
        </div>
        <p className="text-[#FF5705] w-[220px] h-[230px] text-[40px] leading-10 text-center font-extrabold ">
          new way to interact with your audience
        </p>
      </div>

      <Link href="/login">
        <button className="w-[177px] h-[45px] mt-[400px] justify-center rounded-[8px] bg-[#262626] text-[14px] text-white ">
          explore
        </button>
      </Link>

      <div className="w-[390px] h-[45px] bg-[#FF5705] mt-[60px] overflow-hidden relative">
        <p className="absolute whitespace-nowrap text-[14px] text-white leading-[45px] scrolling-text">
          generate your own version. remix posts. a pool of creativity.generate
          your own version. remix posts. a pool of creativity.
        </p>
      </div>
    </div>
  );
}

export default InteractivePosts;
