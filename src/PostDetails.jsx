import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentInput from './CommentInput';
import Header from './Header';

export default function Post() {
  let { postId } = useParams();

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
        const { post, comments } = response;
        setPost(post);
        setComments(comments);
      })
      .catch((error) => console.error(error));
  }, [postId]);

  return (
    <>
      <Header />
      <hr />
      {post ? (
        <div className='post'>
          <h1>{post.title}</h1>
          <p className='libreFranklin date'>Written {post.date_formatted}</p>
          <img src={post.image} alt='' />
          <p className='libreFranklin'>{post.content}</p>
        </div>
      ) : (
        <p>Post is loading... </p>
      )}
      <hr />
      <div className='commentList'>
        <h2 className='roboto'>
          {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
        </h2>
        {comments.length === 0 ? (
          <p className='libreFranklin'>No comments yet</p>
        ) : (
          <ul className='libreFranklin'>
            {comments.map((comment) => (
              <li key={comment._id}>
                <p className='commentAuthor'>{comment.author}</p>
                <p className='commentDate'>{comment.date_formatted}</p>
                <p className='commentContent'>{comment.content}</p>
              </li>
            ))}
          </ul>
        )}
        <h2 className='roboto'>Leave a comment</h2>
        <CommentInput postId={postId} />
      </div>
      <hr className='footerBreak'/>
      <div className='footer'>
        <div className='links'>
          <a href=''>Privacy & Disclosure Policy</a>
          <a href=''>About Little Boar traveling</a>
          <a href=''>Contact</a>
        </div>
        <p>© 2024 Copyright Little Boar traveling</p>
      </div>
    </>
  );
}
