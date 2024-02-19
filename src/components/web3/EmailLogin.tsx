import { useState, useEffect } from "react";
import {
  embeddedWallet,
  smartWallet,
  useConnect,
  useEmbeddedWallet,
  useContract,
  useContractRead,
  useSDK,
  useAddress,
} from "@thirdweb-dev/react";
import { ACCOUNT_FACTORY_ADDRESS } from "../../constants/constants";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export default function EmailSignIn() {
  const router = useRouter();
  const address = useAddress();
  const sdk = useSDK();
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

  const [usernameInput, setUsernameInput] = useState<string>("");
  const [isRegisteringUsername, setIsRegisteringUsername] =
    useState<boolean>(false);

  const [isVerifyingEmail, setIsVerifyingEmail] = useState<boolean>(false);

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

  useEffect(() => {
    if (state === "connected" && address) {
      // Check if the connected user has a username
      (async () => {
        if (hasUsername) {
          console.log("hello");
          router.push("/");
        }
      })();
    }
  }, [address, state, hasUsername, router]);

  const handleEmailEntered = async () => {
    if (!email) {
      toast.error("Please enter an email");
      return;
    }
    setState("sending_email");
    await sendVerificationEmail({ email });
    setState("email_verification");
  };

  const handleEmailVerification = async () => {
    if (!email || !verificationCode) {
      toast.error("Please enter a verification code");
      return;
    }
    setIsVerifyingEmail(true);
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
      setState("connected");
    } catch (error) {
      console.log(error);
    }
    setIsVerifyingEmail(false);
  };

  if (state === "sending_email") {
    return (
      <div className="flex flex-col w-full h-[450px] items-center justify-center">
        <p>Sending OTP email...</p>
      </div>
    );
  }

  if (state === "email_verification") {
    return (
      <div className="flex flex-col w-full h-[450px]">
        <div className="flex flex-col justify-center items-start w-full m-auto rounded-lg bg-white p-4 text-black">
          <h3>Enter the verification code sent to your email</h3>
          <input
            className="w-full h-[45px] my-4 border border-black rounded-[8px] p-2"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button
            onClick={handleEmailVerification}
            disabled={isVerifyingEmail || !verificationCode}
            className={`w-full h-[45px] my-2 flex justify-center items-center bg-primary text-white rounded-lg ${
              isVerifyingEmail ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          >
            {isVerifyingEmail ? "Verifying..." : "Verify"}
          </button>
          <a
            onClick={() => setState("init")}
            className="w-full text-center text-black cursor-pointer"
          >
            Go Back
          </a>
        </div>
      </div>
    );
  }

  if (state === "connected" && !hasUsername) {
    return (
      <div className="flex justify-center items-center w-full h-[450px] py-12 bg-white">
        <div className="flex flex-col justify-center items-start w-full bg-white p-4 text-black">
          <p className="mb-4">
            Create a unique username to start using the app.
          </p>
          <input
            type="text"
            placeholder="Username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-[8px] mb-4"
          />
          <button
            onClick={handleCreateUsername}
            disabled={isRegisteringUsername}
            className={`w-full px-4 py-2 bg-primary text-white rounded-[8px] ${
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
    <div className="flex flex-col w-full h-[450px] m-auto">
      <div className="flex flex-col justify-center items-start w-full m-auto  rounded-lg bg-white p-4 text-black">
        <h1>Enter email</h1>
        <input
          type="text"
          className="w-full h-10 my-4 border border-black rounded-[8px] p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full h-10 my-2 flex justify-center items-center bg-primary text-white rounded-lg"
          onClick={handleEmailEntered}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
