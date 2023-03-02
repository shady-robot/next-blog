import { useSession } from "next-auth/react";

import { getSortedPostData } from "@/lib/static_posts";
import { getDynamicPostsData } from "@/lib/dynamic_posts";
import { HeaderMegaMenu } from "@/components/layout/header";

import UserHome from "@/components/home/userHome";
import Landing from "@/components/home/landing";

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
export default function Home(props) {
  const { data: session, status } = useSession();
  return (
    <>
      <HeaderMegaMenu />
      {!session ? <Landing {...props} /> : <UserHome />}
    </>
  );
}
