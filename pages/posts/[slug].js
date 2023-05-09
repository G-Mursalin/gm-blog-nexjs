import Posts from "@/components/Posts/Post/Post";
import { getPostData, getPostsFiles } from "@/lib/postsUtile";

const Post = ({ post }) => {
  return (
    <div>
      <Posts post={post} />
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default Post;
