import Head from "next/head";
import { getSortedPostData } from "../../../lib/posts";
import utilStyles from "../../../styles/utils.module.css";
import PostsLists from "../../../components/posts/PostsList";
import { BlogContainer } from "../../../components/BlogContainer";

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <BlogContainer>
      <Head>
        <title>Static Posts From Local Markdown File</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          Static Blog - Local Markdown File
        </h2>
        <PostsLists posts={allPostsData} types="static" />
      </section>
    </BlogContainer>
  );
}
