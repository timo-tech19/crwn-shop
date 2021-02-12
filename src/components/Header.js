import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import { ReactComponent as Logo } from '../assets/crown.svg';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
