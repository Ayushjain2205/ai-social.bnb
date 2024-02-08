import Image from "next/image";
import { Inter } from "next/font/google";
import InfiniteCanvas from "../components/InfiniteCanvas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <InfiniteCanvas />
    </div>
  );
}
