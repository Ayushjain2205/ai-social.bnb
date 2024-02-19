import React, { useEffect, useState } from "react";
import {
  useEthereum,
  useConnect,
  useAuthCore,
} from "@particle-network/auth-core-modal";
import { Avalanche } from "@particle-network/chains";
import { useRouter } from "next/router";

const logout = () => {
  const { provider } = useEthereum();
  const { connect, disconnect } = useConnect();
  const { userInfo } = useAuthCore();

  const handleLogin = async (authType) => {
    if (!userInfo) {
      await connect({
        socialType: authType,
        chain: Avalanche,
      });
    }
  };

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async operation to fetch userInfo
    const fetchUserInfo = async () => {
      // Your logic to fetch user info here
      // For demonstration, we'll simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // After fetching user info, update loading state
      setIsLoading(false);
    };

    fetchUserInfo();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Consistent initial render
  }

  return (
    <div className="flex flex-col items-center justify-center px-[10px] h-[650px] w-[390px] m-auto">
      {!userInfo ? (
        <button
          className="w-full h-10 my-2 mx-2 flex justify-center items-center bg-primary text-white rounded-lg"
          onClick={() => handleLogin("")}
        >
          Login
        </button>
      ) : (
        <button
          className="w-full h-10 my-2 mx-2 flex justify-center items-center bg-primary text-white rounded-lg"
          onClick={disconnect}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default logout;
