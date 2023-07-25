import styles from "./Start.module.css";
import posts from "../../json/posts.json";
import Post from "../../components/PostCard";

export default function Start() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  )
}
