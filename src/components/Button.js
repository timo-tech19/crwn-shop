import React from 'react';
import './Button.scss';

function Button({ children, isGoogleSignIn, ...other }) {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...other}
    >
      {children}
    </button>
  );
}

export default Button;
