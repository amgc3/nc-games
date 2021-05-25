import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='Nav-bar'>
          <div>
            <Link className='Nav-link' to='/'>
              Login
            </Link>
            <Link className='Nav-link' to='/reviews'>
              Reviews
            </Link>
          </div>
        </nav>
      );
};

export default Nav;