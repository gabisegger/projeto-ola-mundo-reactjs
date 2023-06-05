import Banner from "../../components/Banner";
import styles from "./Start.module.css";
import posts from "../../json/posts.json";
import Post from "../../components/Post";

export default function Start() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}
