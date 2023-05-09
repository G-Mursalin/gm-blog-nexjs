import AllPosts from "@/components/Posts/AllPosts";
import { getAllPosts } from "@/lib/postsUtile";

const Posts = ({ allPosts }) => {
  return (
    <div>
      <AllPosts posts={allPosts} />
    </div>
  );
};

export async function getStaticProps(context) {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}

export default Posts;
