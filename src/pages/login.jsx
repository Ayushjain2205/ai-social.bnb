import React, { useEffect } from "react";
import {
  useEthereum,
  useConnect,
  useAuthCore,
} from "@particle-network/auth-core-modal";
import { Avalanche } from "@particle-network/chains";
import { useRouter } from "next/router";

const login = () => {
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

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);

  return (
    <div className="flex flex-col items-center justify-center w-[390px] px-[10px] h-[650px] m-auto">
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

export default login;
