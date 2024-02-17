import React from "react";
import Page from "../../components/Layout/Page";

function Customise() {
  return (
    <div className="bg-[#FF5705] h-[665px]">
      <p className="mr-[10px] text-[52px] text-black font-extrabold text-right">
        customise templates
      </p>

      <div className="absolute top-[200px]">
        <div className=" relative top-[30px] w-[245px] h-[24px] rounded-[30px] transform rotate-[-30deg] bg-white">
          <p className="text-[12px] w-full text-center leading-[22px] text-black items-center">
            real time visuals
          </p>
        </div>

        <div
          className="relative top-[50px] w-[177px] h-[24px] rounded-[30px] transform
        rotate-[6.24deg]  left-[190px] bg-white"
        >
          <p className="text-[12px] w-full text-center leading-[22px] text-black items-center">
            scribble & guess
          </p>
        </div>

        <div
          className="relative top-[90px] left-[20px] w-[177px] h-[24px] rounded-[30px] transform
        rotate-[-0.45deg]  bg-white"
        >
          <p className="text-[12px] w-full text-center leading-[22px] text-black items-center">
            generate music
          </p>
        </div>

        <div className=" relative top-[160px] w-[245px] h-[24px] rounded-[30px] transform rotate-[15deg] left-[120px] bg-white">
          <p className="text-[12px] w-full text-center leading-[22px] text-black items-center">
            interact with your audience
          </p>
        </div>

        <div className=" relative top-[190px] w-[180px] h-[24px] rounded-[30px] transform rotate-[-10deg] left-[20px] bg-white">
          <p className="text-[12px] w-full text-center leading-[22px] text-black items-center">
            fun templates
          </p>
        </div>
      </div>

      <div className="mt-[470px] ml-[10px] mb-[10px]">
        (these templates are ai models)
      </div>
    </div>
  );
}

export default Customise;
