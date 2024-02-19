// pages/post/[id].js
import React from "react";
import { useRouter } from "next/router";
import Page from "../../components/Layout/Page";
import Post from "../../components/UI/Post";
import { postData } from "../../helpers/postdata";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Convert the id to a number and find the post
  const postToDisplay = postData.find((post) => post.id === parseInt(id, 10));

  if (!postToDisplay) {
    return (
      <Page back="/">
        <div className="flex flex-col items-center justify-center h-[300px]">
          Post not found
        </div>
      </Page>
    );
  }

  return (
    <Page back="/">
      <Post
        id={postToDisplay.id}
        title={postToDisplay.title}
        tag={postToDisplay.tag}
        type={postToDisplay.type}
        username={postToDisplay.username}
        avatar={postToDisplay.avatar}
        src={postToDisplay.src}
        remixid={postToDisplay.remixid}
      />
    </Page>
  );
};

export default PostPage;
