import React from "react";

function HI() {
  return (
    <div className=" flex flex-col justify-center items-center bg-[#FF5705] h-[665px]">
      <img
        className="mt-[180px]  w-[150px] h-[150px] blinking-element scaledown"
        src="/images/mascot1.svg"
      />
      <div>
        <p className="text-[60px] mt-[40px] text-center font-extrabold text-#000000 ">
          ai.social.
        </p>
      </div>
    </div>
  );
}

export default HI;
