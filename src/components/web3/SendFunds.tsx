import { useState } from "react";
import {
  useAddress,
  useBalanceForAddress,
  useContract,
  useSDK,
} from "@thirdweb-dev/react";
import { ACCOUNT_FACTORY_ADDRESS } from "../../constants/constants";

export const SendFunds = () => {
  const address = useAddress();
  const sdk = useSDK();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [receiverUsername, setReceiverUsername] = useState<string>("");
  const [sendAmount, setSendAmount] = useState<number>(0);
  const [isSendingFunds, setIsSendingFunds] = useState<boolean>(false);

  const { contract: accountFactory } = useContract(ACCOUNT_FACTORY_ADDRESS);
  const { data: tokenBalance } = useBalanceForAddress(address!);

  const sendFunds = async () => {
    if (!receiverUsername || sendAmount === 0) {
      alert("Please create a username and fill in the amount to send");
      return;
    }
    if (sendAmount > Number(tokenBalance?.displayValue)) {
      alert("Insufficient funds");
      return;
    }
    try {
      setIsSendingFunds(true);
      const receiverWalletAddress = await accountFactory?.call(
        "accountOfUsername",
        [receiverUsername]
      );
      if (
        receiverWalletAddress === "0x0000000000000000000000000000000000000000"
      ) {
        alert("Username does not exist");
        return;
      }
      await sdk?.wallet.transfer(receiverWalletAddress!, sendAmount);
      alert("Funds sent");
    } catch (error) {
      console.error(error);
      alert("Error sending funds");
    } finally {
      setIsSendingFunds(false);
      setReceiverUsername("");
      setSendAmount(0);
    }
  };

  if (!isModalOpen) {
    return (
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out"
      >
        Send Funds
      </button>
    );
  }

  return (
    <div className="flex justify-center items-center w-full py-12 bg-white">
      <div className="flex flex-col justify-center items-start w-full max-w-md p-8 border border-gray-300 rounded-lg bg-white text-black">
        <div className="w-full flex justify-end">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 text-gray-600 bg-transparent hover:text-gray-800 transition duration-150 ease-in-out"
          >
            Close
          </button>
        </div>
        <div className="my-4">
          <h3 className="font-bold text-lg">Send:</h3>
          <p className="text-xl font-semibold">
            {tokenBalance?.displayValue} MATIC
          </p>
        </div>
        <p className="mt-4">To:</p>
        <input
          type="text"
          placeholder="Username"
          value={receiverUsername}
          onChange={(e) => setReceiverUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
        />
        <p className="mt-4">Amount:</p>
        <input
          type="number"
          value={sendAmount}
          step={0.01}
          onChange={(e) => setSendAmount(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
        />
        <button
          onClick={sendFunds}
          disabled={isSendingFunds}
          className={`mt-4 w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-150 ease-in-out ${
            isSendingFunds ? "bg-blue-300" : "bg-blue-500"
          }`}
        >
          {isSendingFunds ? "Sending..." : "Send Funds"}
        </button>
      </div>
    </div>
  );
};
