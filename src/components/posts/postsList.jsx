import Link from "next/link";
import { List, Text } from "@mantine/core";

import Date from "@/components/date";

export default function PostsLists({ posts, types }) {
  return (
    <List size="lg" icon={<></>}>
      {posts.map(({ id, createdAt, title, slug }) => (
        <List.Item key={id}>
          {slug ? (
            <Link href={`/posts/${types}/${slug}`}>{title}</Link>
          ) : (
            <Link href={`/posts/${types}/${id}`}>{title}</Link>
          )}
          <br />
          <Text>
            <Date dateString={createdAt} />
          </Text>
        </List.Item>
      ))}
    </List>
  );
}
