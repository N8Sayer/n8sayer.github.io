import React from 'react';

const Header = () => {
  return(
    <header className='header row'>
      <div className='header-content col-md-10'>
        <h1>Nate Sargent</h1>
        <h2>Front-End Web Developer</h2>
      </div>
      <div className='col-md-2'>
        <a href='mailto:forcelord50@gmail.com'>
          <img className='img-rounded header-img' src='./src/images/profile-pic.jpg' />
        </a>
      </div>
    </header>
  );
};

export default Header;
