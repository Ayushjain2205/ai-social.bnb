import { useState } from "react";
import {
  useAddress,
  useBalanceForAddress,
  useContract,
  useContractRead,
  useDisconnect,
  useSDK,
} from "@thirdweb-dev/react";
import { ACCOUNT_FACTORY_ADDRESS } from "../../constants/constants";

export const Connected = () => {
  const address = useAddress();
  const sdk = useSDK();
  const disconnect = useDisconnect();

  const [usernameInput, setUsernameInput] = useState<string>("");
  const [isRegisteringUsername, setIsRegisteringUsername] =
    useState<boolean>(false);

  const { contract: accountFactory } = useContract(ACCOUNT_FACTORY_ADDRESS);

  const handleCreateUsername = async () => {
    if (!usernameInput) {
      alert("Please enter a username");
      return;
    }
    try {
      const usernameAccount = await accountFactory?.call("accountOfUsername", [
        usernameInput,
      ]);
      if (usernameAccount === "0x0000000000000000000000000000000000000000") {
        setIsRegisteringUsername(true);
        const accountContract = await sdk?.getContract(address!);
        await accountContract?.call("register", [usernameInput]);
        alert("Username registered");
        setIsRegisteringUsername(false);
      } else {
        alert("Username taken");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { data: hasUsername } = useContractRead(accountFactory, "hasUsername", [
    address,
  ]);
  const { data: usernameOfAccount } = useContractRead(
    accountFactory,
    "usernameOfAccount",
    [address]
  );
  const { data: tokenBalance } = useBalanceForAddress(address!);

  if (!hasUsername) {
    return (
      <div className="flex justify-center items-center w-full py-12 bg-white">
        <div className="flex flex-col justify-center items-start w-full max-w-md border border-gray-300 rounded-lg bg-white p-4 text-black">
          <h1 className="font-bold">Create Username</h1>
          <p className="mb-4">
            Create a unique username to start using the app.
          </p>
          <input
            type="text"
            placeholder="Username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleCreateUsername}
            disabled={isRegisteringUsername}
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 ${
              isRegisteringUsername
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
          >
            {isRegisteringUsername
              ? "Registering username..."
              : "Register username"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto my-8 p-6 border border-gray-300 rounded-lg bg-white text-black">
      <div className="flex flex-col justify-between items-center mb-4">
        <h1 className="font-bold">Welcome {usernameOfAccount}</h1>
        <a
          href={`https://testnet.bscscan.com/address/${address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out text-[14px]"
        >
          {address}
        </a>
        <button
          onClick={async () => {
            await disconnect();
          }}
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          Sign Out
        </button>
      </div>
      <div>
        <h3 className="font-bold">Balance:</h3>
        <p className="text-xl font-semibold">
          {tokenBalance?.displayValue} {tokenBalance?.symbol}
        </p>
      </div>
    </div>
  );
};
