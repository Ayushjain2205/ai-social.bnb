import React, { useEffect } from "react";
import { useRouter } from "next/router";

function HI() {
  const router = useRouter(); // Hook to control routing

  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      router.push("/welcome/welcome2"); // Change to the next welcome screen URL
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts or rerenders
  }, [router]);

  // Function to handle click event
  const handleClick = () => {
    router.push("/welcome/welcome2"); // Navigate to the next welcome screen
  };

  return (
    <div
      onClick={handleClick}
      className=" flex flex-col justify-center items-center bg-[#FF5705] h-[665px] w-[390px]"
    >
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
