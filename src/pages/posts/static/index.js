import Head from "next/head";
import { Container } from "@mantine/core";
import { getSortedPostData } from "@/lib/static_posts";
import utilStyles from "@/styles/utils.module.css";
import PostsLists from "@/components/posts/PostsList";

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
    <Container>
      <Head>
        <title>Static Posts From Local Markdown File</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <PostsLists posts={allPostsData} types="static" />
      </section>
    </Container>
  );
}
