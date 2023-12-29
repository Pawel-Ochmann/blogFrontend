import { useEffect, useState } from 'react';

export default function Post() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Api-key': 'jcbtxLoBz!Cc2Oq01G5wmltGsoIw!9Y&',
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
       <h1>Welcome to my Blog</h1>
       {posts ? (
         <ul>
           {posts.map((post) => (
             <li key={post.id}>
               <h2>{post.title}</h2>
               <p>{post.content}</p>
               <p>{post.date_formatted}</p>
             </li>
           ))}
         </ul>
       ) : (
         <p>Loading posts...</p>
       )}
     </>
   );
}
