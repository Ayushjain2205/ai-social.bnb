import React from "react";

const MascotImg = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black h-[665px] w-[390px]">
      <img
        className="rotating-image  blinking-element"
        src="/images/mascot2.svg"
      />

      <p className="text-white mt-[60px] text-[20px] text-center scaledown">
        pleased to have you here.
      </p>
    </div>
  );
};

export default MascotImg;
