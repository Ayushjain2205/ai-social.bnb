import { useState } from "react";
import {
  embeddedWallet,
  smartWallet,
  useConnect,
  useEmbeddedWallet,
} from "@thirdweb-dev/react";
import { ACCOUNT_FACTORY_ADDRESS } from "../../constants/constants";

export default function EmailSignIn() {
  const [state, setState] = useState<
    "init" | "sending_email" | "email_verification" | "connected"
  >("init");
  const [email, setEmail] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");

  const { connect, sendVerificationEmail } = useEmbeddedWallet();
  const connectSmartWallet = useConnect();
  const smartWalletConfig = smartWallet(embeddedWallet(), {
    factoryAddress: ACCOUNT_FACTORY_ADDRESS,
    gasless: true,
  });

  const handleEmailEntered = async () => {
    if (!email) {
      alert("Please enter an email");
      return;
    }
    setState("sending_email");
    await sendVerificationEmail({ email });
    setState("email_verification");
  };

  const handleEmailVerification = async () => {
    if (!email || !verificationCode) {
      alert("Please enter a verification code");
      return;
    }
    try {
      const personalWallet = await connect({
        strategy: "email_verification",
        email,
        verificationCode,
      });
      const smartWallet = await connectSmartWallet(smartWalletConfig, {
        personalWallet: personalWallet,
        chainId: 80001,
      });
      const isDeployed = await smartWallet.isDeployed();
      if (!isDeployed) {
        await smartWallet.deploy();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (state === "sending_email") {
    return (
      <div>
        <p>Sending OTP email...</p>
      </div>
    );
  }

  if (state === "email_verification") {
    return (
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center items-start w-full m-auto border border-gray-300 rounded-lg bg-white p-4 text-black">
          <h3>Enter the verification code sent to your email</h3>
          <input
            className="w-full h-10 my-4 border border-gray-300 rounded-lg p-2"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button
            className="w-full h-10 my-2 flex justify-center items-center bg-blue-500 text-white border border-blue-500 rounded-lg"
            onClick={handleEmailVerification}
          >
            Verify
          </button>
          <a
            onClick={() => setState("init")}
            className="w-full text-center text-blue-500 cursor-pointer"
          >
            Go Back
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center items-start w-full m-auto border border-gray-300 rounded-lg bg-white p-4 text-black">
        <h1>Sign In</h1>
        <input
          type="text"
          className="w-[336px] h-10 my-4 border border-gray-300 rounded-lg p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full h-10 my-2 flex justify-center items-center bg-blue-500 text-white border border-blue-500 rounded-lg"
          onClick={handleEmailEntered}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
