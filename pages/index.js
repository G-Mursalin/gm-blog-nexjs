import FeaturedPosts from "@/components/Home/FeaturedPost";
import Hero from "@/components/Home/Hero";
import { getFeaturedPosts } from "@/lib/postsUtile";
import { Fragment } from "react";

const Home = ({ featuredPosts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
}

export default Home;
