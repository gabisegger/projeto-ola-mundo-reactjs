import './Post.css';
import { useParams } from 'react-router-dom';
import posts from '../../json/posts.json';
import PostModel from '../../components/PostModel';
import ReactMarkdown from 'react-markdown';

export default function Post() {
  const parameters = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameters.id);
  })

  if(!post){
    return <h1>Post não encontrado...</h1>
  }

  return (
    <PostModel 
      coverPhoto={`/assets/posts/${post.id}/capa.png`}
      title={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
      
    </PostModel>
  )
}
