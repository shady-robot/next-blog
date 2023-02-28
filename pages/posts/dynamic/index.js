import { GetStaticProps } from "next";
import prisma from "../../../lib/prisma";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../../styles/utils.module.css";
import PostsLists from "../../../components/posts/PostsList";
import { BlogContainer } from "../../../components/BlogContainer";

export async function getStaticProps() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  // JSON serializable data types with `createdAt`  ("[object Date]")
  return {
    props: { feed: JSON.parse(JSON.stringify(feed)) },
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
