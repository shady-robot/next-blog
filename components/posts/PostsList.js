import Link from "next/link";
import Date from "../Date";
import utilStyles from "../../styles/utils.module.css";

export default function PostsLists({ posts, types }) {
  return (
    <ul className={utilStyles.list}>
      {posts.map(({ id, createdAt, title, slug }) => (
        <li className={utilStyles.listItem} key={id}>
          {slug ? (
            <Link href={`/posts/${types}/${slug}`}>{title}</Link>
          ) : (
            <Link href={`/posts/${types}/${id}`}>{title}</Link>
          )}
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={createdAt} />
          </small>
        </li>
      ))}
    </ul>
  );
}
