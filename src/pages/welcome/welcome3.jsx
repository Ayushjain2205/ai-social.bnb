import React, { useEffect } from "react";
import { useRouter } from "next/router";

const MascotImg = () => {
  const router = useRouter(); // Hook to control routing

  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      router.push("/welcome/welcome4"); // Change to the next welcome screen URL
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts or rerenders
  }, [router]);

  // Function to handle click event
  const handleClick = () => {
    router.push("/welcome/welcome4"); // Navigate to the next welcome screen
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-center items-center bg-black h-[665px] w-[390px]"
    >
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
