import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleIconClick = () => {
    setOpen(!open);
  };

  return (
    <div className='header'>
      <div className='imageHeader'>
        <Link to='/'>
          <img
            src='https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_1280.jpg'
            alt=''
          />
          <p className='pacifico'>Little Boar traveling</p>
        </Link>
      </div>
      <div className='headerButton'>
        <div
          id='nav-icon3'
          onClick={handleIconClick}
          className={open ? 'open' : ''}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={!open ? 'closed' : ''}>
        <ul className='roboto'>
          <li>destinations</li>
          <li>camping & hiking gear</li>
          <li>van life</li>
          <li>travel inspiration</li>
          <li>shop</li>
          <li>work with me</li>
        </ul>
      </nav>
    </div>
  );
}
