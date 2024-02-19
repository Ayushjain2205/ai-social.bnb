import React from "react";
import { useRouter } from "next/router";
import InfiniteCanvas from "../components/InfiniteCanvas";
import Page from "../components/Layout/Page";

export default function Home() {
  const router = useRouter();

  const { remixid } = router.query;
  console.log(remixid);

  return (
    <Page back={remixid ? "/" : null} isGridView>
      <InfiniteCanvas remixid={remixid} />
    </Page>
  );
}
