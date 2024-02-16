import { useEffect } from "react";
import { SmartWallet, useAddress, useWallet } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import EmailSignIn from "../components/web3/EmailLogin";
import Page from "@/components/Layout/Page";

const Home = () => {
  const address = useAddress();
  const wallet = useWallet();
  const router = useRouter();

  // useEffect(() => {
  //   // Check if the user is connected and has a SmartWallet instance
  //   if (address && wallet instanceof SmartWallet) {
  //     router.push("/");
  //   }
  // }, [address, wallet, router]);

  return (
    <Page topBar={false}>
      <EmailSignIn />
    </Page>
  );
};

export default Home;
