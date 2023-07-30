import './Post.css';
import styles from './Post.module.css';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from '../../json/posts.json';
import PostModel from '../../components/PostModel';
import ReactMarkdown from 'react-markdown';
import NotFound from '../../components/NotFound';
import DefaultPage from '../../components/DefaultPage';
import PostCard from '../../components/PostCard';

export default function Post() {
  const parameters = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameters.id);
  })

  if(!post){
    return <NotFound/>
  }

  const recommendedPosts = posts
    .filter((post) => post.id !== Number(parameters.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)
  
  console.log(recommendedPosts)

  return (
    <Routes>
      <Route path="*" element={<DefaultPage/>}>
        <Route index element={
          <PostModel 
            coverPhoto={`/assets/posts/${post.id}/capa.png`}
            title={post.titulo}
          >
            <div className="post-markdown-container">
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
            </div>
          
            <h2 className={styles.titleOthersPosts}>
              Outros posts que você pode gostar:
            </h2>

            <ul className={styles.recommendedPosts}>
              {recommendedPosts.map((post) => (
                <li key={post.id}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>

          </PostModel>
        } />
      </Route>
    </Routes>
  )
}
