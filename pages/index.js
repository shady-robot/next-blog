import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import { getSortedPostData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import PostsLists from "../components/posts/PostsList";

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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, My Name is Shady</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          <Link href={"/posts/static"}>Static Blog - Local Markdown File</Link>
        </h2>
        <PostsLists posts={allPostsData} types="static" />
      </section>
    </Layout>
  );
}
