import Image from "next/image";
import { Inter } from "next/font/google";
import InfiniteCanvas from "../components/InfiniteCanvas";
import Page from "../components/Layout/Page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page isGridView>
      <InfiniteCanvas />
    </Page>
  );
}
