import Head from "next/head";

import Layout, { siteTitle } from "@/components/layout/layout";
import PostsLists from "@/components/posts/PostsList";
import utilStyles from "@/styles/utils.module.css";

export default function Landing({ staticPosts, dynamicPosts }) {
  return (
    <>
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
            Static Blog - Local Markdown File
          </h2>
          <PostsLists posts={staticPosts} types="static" />
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>
            Dynamic Blog - From PostgreSQL
          </h2>
          <PostsLists posts={dynamicPosts} types="dynamic" />
        </section>
      </Layout>
    </>
  );
}
