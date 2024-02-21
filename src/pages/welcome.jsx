import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const WelcomeScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (screenIndex < 4) {
      // Only set a timer if we're not on the last screen
      const timer = setTimeout(() => {
        setScreenIndex(screenIndex + 1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [screenIndex]);

  const handleClick = () => {
    if (screenIndex < 4) {
      setScreenIndex(screenIndex + 1);
    } else {
      router.push("/login"); // On the last screen, redirect to login
    }
  };

  const renderScreenContent = () => {
    switch (screenIndex) {
      case 0:
        return <Welcome1 />;
      case 1:
        return <Welcome2 />;
      case 2:
        return <Welcome3 />;
      case 3:
        return <Welcome4 />;
      case 4:
        return <Welcome5 />;
      default:
        return <p>Invalid screen index</p>;
    }
  };

  return <div onClick={handleClick}>{renderScreenContent()}</div>;
};

const Welcome1 = () => (
  <div className=" flex flex-col justify-center items-center bg-[#FF5705] h-[665px] w-[390px]">
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

const Welcome2 = () => (
  <div className="bg-white h-[650px] w-[390px] ">
    <p className="text-[#FF5705] text-[80px] leading-[100px] w-[300px] h-[340px] font-extrabold ml-5 mr-5 shiver">
      CREATE + consume
    </p>
    <div>
      <p className="text-[#FF5705] text-[20px] leading-[30px] mb-5 mr-5 ml-5 mt-[280px] font-bold">
        (everything creative)
      </p>
    </div>
  </div>
);

const Welcome3 = () => (
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

const Welcome4 = () => (
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

const Welcome5 = () => (
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

    <Link href="/wallet">
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

export default WelcomeScreen;
