// pages/post/[id].js
import React from "react";
import { useRouter } from "next/router";
import Page from "../../components/Layout/Page";
import Post from "../../components/UI/Post";
import { postData } from "../../helpers/postdata"; // Adjust the import path to where your postData is defined

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Convert the id to a number and find the post
  const postToDisplay = postData.find((post) => post.id === parseInt(id, 10));

  if (!postToDisplay) {
    return <Page>Post not found</Page>;
  }

  return (
    <Page>
      <Post
        title={postToDisplay.title}
        tag={postToDisplay.tag}
        type={postToDisplay.type}
        username={postToDisplay.username}
        avatar={postToDisplay.avatar}
        src={postToDisplay.src}
      />
    </Page>
  );
};

export default PostPage;
