import React from "react";
import classes from "./FeaturedPosts.module.css";
import Posts from "../Posts/Posts";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <Posts posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
