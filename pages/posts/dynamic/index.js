import { GetStaticProps } from "next";
import Head from "next/head";
import utilStyles from "../../../styles/utils.module.css";
import PostsLists from "../../../components/posts/PostsList";
import { BlogContainer } from "../../../components/BlogContainer";
import { getDynamicPostsData } from "../../../lib/dynamic_posts";

export async function getStaticProps() {
  const feed = await getDynamicPostsData();
  return {
    props: { feed },
    revalidate: 10,
  };
}

export default function Feed({ feed }) {
  return (
    <BlogContainer>
      <Head>
        <title>Dynamic Posts From PostgreSQL</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <PostsLists posts={feed} types="dynamic" />
      </section>
    </BlogContainer>
  );
}
