import Head from "next/head";
import { getAllPostSlugs, getPostDataBySlug } from "../../../lib/dynamic_posts";
import Layout from "../../../components/layout";
import Date from "../../../components/date";
import utilStyles from "../../../styles/utils.module.css";

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

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.createdAt} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
