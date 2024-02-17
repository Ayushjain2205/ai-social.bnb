import React, { useEffect } from "react";
import { useRouter } from "next/router";

const CreateConsume = () => {
  const router = useRouter(); // Hook to control routing

  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      router.push("/welcome/welcome3"); // Change to the next welcome screen URL
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts or rerenders
  }, [router]);

  // Function to handle click event
  const handleClick = () => {
    router.push("/welcome/welcome3"); // Navigate to the next welcome screen
  };

  return (
    <div onClick={handleClick} className="bg-white h-[650px] w-[390px] ">
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
};

export default CreateConsume;
