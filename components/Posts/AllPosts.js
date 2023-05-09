import React from "react";
import classes from "./AllPosts.module.css";
import Posts from "./Posts";

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <Posts posts={posts} />
    </section>
  );
};

export default AllPosts;
