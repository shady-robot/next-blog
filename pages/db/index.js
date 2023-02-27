import { GetStaticProps } from "next";
import prisma from "../../lib/prisma";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import { BlogContainer } from "../../components/BlogContainer";

export async function getStaticProps() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
}

export default function Feed({ feed }) {
  console.log(feed);
  return (
    <BlogContainer>
      <h1>hello</h1>
    </BlogContainer>

    // <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //   <h2 className={utilStyles.headingLg}>Blog</h2>
    //   <ul className={utilStyles.list}>
    //     {feed.map(({ id, date, title }) => (
    //       <li className={utilStyles.listItem} key={id}>
    //         <Link href={`/posts/${id}`}>{title}</Link>
    //         <br />
    //         <small className={utilStyles.lightText}>
    //           <Date dateString={date} />
    //         </small>
    //       </li>
    //     ))}
    //   </ul>
    // </section>
  );
}
