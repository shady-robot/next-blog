import { getAllPostIds, getPostData } from "@/lib/static_posts";
import Post from "@/components/posts/post";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}

const StaticPost = ({ postData }) => <Post postData={postData} />;

export default StaticPost;
