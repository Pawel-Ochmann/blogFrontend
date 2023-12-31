import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentInput from './CommentInput';

export default function Post() {
    let {postId} = useParams();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);



    useEffect(() => {
      fetch(`http://localhost:3000/${postId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          const {post, comments} = response;
            setPost(post);
            setComments(comments);
          })
        .catch((error) => console.error(error));
    }, [postId]);

  return (
    <>
      {post ? (
        <div className='post'>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.date_formatted}</p>
        </div>
      ) : (
        <p>Post is loading... </p>
      )}
      <CommentInput postId={postId} />
      {comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <p>Author: {comment.author}</p>
              <p>{comment.content}</p>
              <p>Date: {comment.date_formatted}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
