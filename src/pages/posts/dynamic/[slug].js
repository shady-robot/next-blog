import { getAllPostSlugs, getPostDataBySlug } from "@/lib/dynamic_posts";
import Post from "@/components/posts/post";

export async function getStaticPaths() {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostDataBySlug(params.slug);
  return { props: { postData } };
}

const DynamicPost = ({ postData }) => <Post postData={postData} />;

export default DynamicPost;
