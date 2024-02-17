import React from "react";
import Page from "../components/Layout/Page";
import Post from "../components/UI/Post";

const feed = () => {
  return (
    <Page>
      {/* <Post title="AI music generation" tag="90s jazz" type="audio" /> */}
      <Post
        title="real time photo generation"
        tag="weird food"
        type="dynamic"
        username="iyushjain"
        avatar="https://picsum.photos/id/91/200"
      />
      {/* <Post
        title="real time photo generation"
        tag="weird food"
        type="scribble"
      /> */}
    </Page>
  );
};

export default feed;
