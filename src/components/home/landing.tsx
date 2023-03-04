import Layout from "@/components/layout/layout";
import UserCard from "./userCard";
import PostsLists from "@/components/posts/PostsList";
import utilStyles from "@/styles/utils.module.css";
import image from "@/img/profile.jpg";


export default function Landing({ staticPosts, dynamicPosts }) {
  const username = "Shady"
  const description =  <p>This is a sample website - you’ll be building a
    site like this on{" "} <a href="https://nextjs.org/learn">our Next.js
    tutorial</a></p>
  return (
    <Layout>
      <UserCard image={image} username={username} description={description}/>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          Static Blog - Local Markdown File
        </h2>
        <PostsLists posts={staticPosts} types="static" />
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Dynamic Blog - From PostgreSQL</h2>
        <PostsLists posts={dynamicPosts} types="dynamic" />
      </section>
    </Layout>
  );
}
