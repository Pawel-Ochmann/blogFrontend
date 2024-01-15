import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const CommentInput = ({ postId }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const submitComment = async () => {
    // Assuming you have an API endpoint to handle the comment submission
    try {
      const response = await fetch(
        `https://blogbackend.adaptable.app/${postId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ author, content }),
        }
      );
      if (response.ok) {
        // Handle success, e.g., update UI or trigger a reload of comments
        console.log('Comment submitted successfully!');
      } else {
        // Handle error, e.g., display an error message
        console.error('Error submitting comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission and page reload

    if (author.trim() !== '' && content.trim() !== '') {
      await submitComment();
      setAuthor('');
      setContent('');
      window.location.reload();
    }
  };

  return (
    <div className='commentInput'>
      <label>
        <textarea
          value={content}
          onChange={handleContentChange}
          name='content'
          placeholder='Comment'
          required
        ></textarea>
      </label>
      <label>
        <input
          type='text'
          value={author}
          onChange={handleAuthorChange}
          name='author'
          placeholder='Author'
          required
        />
      </label>
      <button className='roboto' onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default CommentInput;
