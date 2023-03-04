import {Stack, Text, Title} from '@mantine/core';

import Layout from "@/components/layout/layout";
import UserCard from "./userCard";
import PostsLists from "@/components/posts/PostsList";
import image from "@/img/profile.jpg";


export default function Landing({ staticPosts, dynamicPosts }) {
  const username = "Shady"
  const description =  <Text>This is a mply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining
    essentially unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently with
    desktop publishing software like Aldus PageMaker including versions of 
    website - you’ll be building a site like this on{" "}
    <a href="https://nextjs.org/learn">our Next.js
    tutorial</a></Text>
  return (
    <Layout>
      <UserCard image={image} username={username} description={description}/>

      <Stack spacing="xs" justify="flex-start" mt={32}>
      <Title order={4}>
          Static Blog - Local Markdown File
       </Title>
        <PostsLists posts={staticPosts} types="static" />
      </Stack>

      <Stack  spacing="xs" justify="flex-start"  mt="3rem">
      <Title order={4}>Dynamic Blog - From PostgreSQL</Title>
        <PostsLists posts={dynamicPosts} types="dynamic" />
      </Stack>
    </Layout>
  );
}
