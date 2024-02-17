import React from "react";
import Page from "../components/Layout/Page";
import Post from "../components/UI/Post";

const feed = () => {
  return (
    <Page>
      <Post tag="weird food" type="dynamic" />
    </Page>
  );
};

export default feed;
