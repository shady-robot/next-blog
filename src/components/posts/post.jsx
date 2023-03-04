import Head from "next/head";
import { Divider, Title, Text } from "@mantine/core";

import Layout from "@/components/layout/layout";
import Date from "@/components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Title order={1} mt={16}>
          {postData.title}
        </Title>
        <Text c="dimmed">
          <Date dateString={postData.createdAt} />
        </Text>
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
