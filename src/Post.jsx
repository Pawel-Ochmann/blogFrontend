import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Post() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('https://blogbackend.adaptable.app', {
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
      <div className="mainContainer">
        <div className="postContainer">
          <h2 className='robotoBold postListHeader'>recent posts</h2>
          {posts ? (
            <ul className='postList'>
              {posts.map((post) => (
                <li key={post.id}>
                  <Link className='robotoBold' to={`/${post._id}`}>
                    <h2>{post.title}</h2>
                    <img src={post.image} alt='' />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading posts...</p>
          )}
        </div>
        <div className='aboutMe'>
          <h2 className='robotoBold postListHeader'>About me</h2>
          <img
            src='https://cdn.pixabay.com/photo/2023/03/11/22/14/ai-generated-7845433_1280.jpg'
            alt=''
          />
          <p className='robotoParagraph'>
            Greetings, fellow wanderers of the digital forest! I'm the spirited
            and adventurous Little Boar, a tiny trotter on a grand journey through
            the enchanting landscapes of life. With a heart full of curiosity and
            a snout ready for exploration, I embark on thrilling escapades,
            discovering hidden gems, and forging friendships with the creatures I
            encounter. Join me as I traverse through meadows of imagination, dive
            into rivers of creativity, and climb mountains of possibility. Whether
            it's chasing dreams or sniffing out new experiences, I'm here to share
            the joyous tales of my travels. Through this blog, I invite you to
            wander alongside me, to embrace the magic of the unknown, and to revel
            in the joy of every tiny discovery. Together, let's celebrate the
            beauty of the journey and the endless wonders that await just around
            the bend. So, fasten your imaginary backpacks, fluff up your imaginary
            map, and let's set forth on this whimsical expedition together!
            Adventure awaits!
          </p>
          <p className='robotoParagraph italic'>Little Boar</p>
        </div>
      </div>
      <div className='bottomBorder postListHeader'></div>
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
