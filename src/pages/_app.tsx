import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  embeddedWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";
import { Avalanche } from "@particle-network/chains";
import { AuthCoreContextProvider } from "@particle-network/auth-core-modal";
import "@particle-network/connectkit/dist/index.css";
import { evmWallets, solanaWallets } from "@particle-network/connectors";

const smartWalletConfig = {
  factoryAddress: "0x453B18Cc5d45962c6337A720C471B485c92dAc6F",
  gasless: true,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthCoreContextProvider
      options={{
        projectId: "bb63d1a2-4db1-47c0-a2d6-c2966f7970d1",
        clientKey: "cZtXSNIMgoPpNNJOgG2Mb3X04hstBjZL9fwzyOpa",
        appId: "fc2508b8-9187-45bc-85fd-01ba507aba21",
        erc4337: {
          name: "SIMPLE",
          version: "1.0.0",
        },
        wallet: {
          customStyle: {
            supportChains: [Avalanche],
          },
        },
        customStyle: {
          theme: {
            light: {
              themeBackgroundColor: "#FF5705",
              primaryBtnColor: "#fff",
              primaryBtnBackgroundColor: "#262626",
              secondaryBtnColor: "#000",
              secondaryBtnBackgroundColor: "#f2f2f2",
              textColor: "#000",
              secondaryTextColor: "#262626",
              iconBorderColor: "#cdd6e1",
              accentColor: "#a257fa",
              inputBackgroundColor: "#f5f4f6",
              inputBorderColor: "#f5f3f5",
              inputPlaceholderColor: "#86899d",
              cardBorderColor: "#dcdfe6",
              cardUnclickableBackgroundColor: "#262626",
              cardUnclickableBorderColor: "#eef2f9",
              cardDividerColor: "#e5e5e5",
              tagBackgroundColor: "#f2f3f6",
              modalBackgroundColor: "#fff",
              tipsBackgroundColor: "#eab98133",
            },
            dark: {
              themeBackgroundColor: "#FF5705",
              primaryBtnColor: "#fff",
              primaryBtnBackgroundColor: "#262626",
              secondaryBtnColor: "#000",
              secondaryBtnBackgroundColor: "#f2f2f2",
              textColor: "#000",
              secondaryTextColor: "#262626",
              iconBorderColor: "#cdd6e1",
              accentColor: "#a257fa",
              inputBackgroundColor: "#f5f4f6",
              inputBorderColor: "#f5f3f5",
              inputPlaceholderColor: "#86899d",
              cardBorderColor: "#dcdfe6",
              cardUnclickableBackgroundColor: "#f7f8f9",
              cardUnclickableBorderColor: "#eef2f9",
              cardDividerColor: "#e5e5e5",
              tagBackgroundColor: "#f2f3f6",
              modalBackgroundColor: "#fff",
              tipsBackgroundColor: "#eab98133",
            },
          },
          logo: "https://i.ibb.co/tYBmmSn/Group-7200.png",
          projectName: "ai-social",
          subtitle: "",
          modalWidth: 400,
          modalHeight: 650,
          primaryBtnBorderRadius: 18,
          modalBorderRadius: 18,
          cardBorderRadius: 18,
        },
      }}
    >
      <ThirdwebProvider
        activeChain="binance-testnet"
        clientId="aa131b3a51f3247c974b4611ac4ff73e"
        supportedWallets={[smartWallet(embeddedWallet(), smartWalletConfig)]}
      >
        <Toaster />
        <Component {...pageProps} />
      </ThirdwebProvider>
    </AuthCoreContextProvider>
  );
}
