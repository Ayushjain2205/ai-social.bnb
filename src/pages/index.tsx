import Image from "next/image";
import { Inter } from "next/font/google";
import InfiniteCanvas from "../components/InfiniteCanvas";
import InfiniteCanvas2 from "../components/InfiniteCanvas2";
import Page from "../components/Layout/Page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page>
      <InfiniteCanvas2 />
    </Page>
  );
}
