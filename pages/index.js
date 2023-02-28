import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import { getSortedPostData } from "../lib/static_posts";
import utilStyles from "../styles/utils.module.css";
import PostsLists from "../components/posts/PostsList";
import { getDynamicPostsData } from "../lib/dynamic_posts";
import { HeaderMegaMenu } from "../components/header";

export async function getStaticProps() {
  const staticPostsData = getSortedPostData();
  const dynamicPostsData = await getDynamicPostsData();
  return {
    props: {
      staticPosts: staticPostsData,
      dynamicPosts: dynamicPostsData,
    },
  };
}
export default function Home({ staticPosts, dynamicPosts }) {
  return (
    <>
      <HeaderMegaMenu />
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
            <Link href={"/posts/static"}>
              Static Blog - Local Markdown File
            </Link>
          </h2>
          <PostsLists posts={staticPosts} types="static" />
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>
            <Link href={"/posts/dynamic"}>Dynamic Blog - From PostgreSQL</Link>
          </h2>
          <PostsLists posts={dynamicPosts} types="dynamic" />
        </section>
      </Layout>
    </>
  );
}
