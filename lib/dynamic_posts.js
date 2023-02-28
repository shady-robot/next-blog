import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import prisma from "./prisma";

export async function getDynamicPostsData() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  // JSON serializable data types with `createdAt`  ("[object Date]")
  return JSON.parse(JSON.stringify(feed));
}

export async function getAllPostSlugs() {
  const posts = await prisma.post.findMany({
    select: { slug: true },
  });
  return posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
}

export async function getPostDataBySlug(slug) {
  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });
  // Use gray-matter to parse the post.content section
  const matterResult = matter(post.content);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const post_json = JSON.parse(JSON.stringify(post));
  return {
    slug,
    contentHtml,
    ...post_json,
  };
}
