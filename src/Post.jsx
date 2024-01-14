import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Post() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => setPosts(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header />
      {posts ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/${post._id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.content}</p>
              <p>{post.date_formatted}</p>
              <FontAwesomeIcon icon={faComment} />
              <p>{post.comments.length}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}
    </>
  );
}
