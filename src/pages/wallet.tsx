import { SmartWallet, useAddress, useWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import EmailSignIn from "../components/web3/EmailLogin";
import { Connected } from "../components/web3/Connected";
import Page from "@/components/Layout/Page";

const Home: NextPage = () => {
  const address = useAddress();
  const wallet = useWallet();

  return (
    <Page>
      {address ? (
        wallet instanceof SmartWallet ? (
          <Connected />
        ) : (
          <>
            <p>Connecting...</p>
          </>
        )
      ) : (
        <EmailSignIn />
      )}
    </Page>
  );
};

export default Home;
