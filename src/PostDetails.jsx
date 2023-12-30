import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
    let {postId} = useParams();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);



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
            console.log(response)
            setPost(response)})
        .catch((error) => console.error(error));
    }, [postId]);

  return (
    <>
      <h1>Welcome to Post details</h1>
      <p>{post.content}</p>
      {/* <p>{comments.length}</p> */}
    </>
  );
}
