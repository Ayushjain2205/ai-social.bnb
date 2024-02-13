import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  embeddedWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";

const smartWalletConfig = {
  factoryAddress: "0x453B18Cc5d45962c6337A720C471B485c92dAc6F",
  gasless: true,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="binance-testnet"
      clientId="aa131b3a51f3247c974b4611ac4ff73e"
      supportedWallets={[smartWallet(embeddedWallet(), smartWalletConfig)]}
    >
      <Toaster />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
