import React from "react";
import classes from "./Post.module.css";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const Post = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default Post;
