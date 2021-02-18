import React from 'react';
import './Button.scss';

function Button({ children, isGoogleSignIn, inverted, ...other }) {
    return (
        <button
            className={`${inverted ? 'inverted' : ''} ${
                isGoogleSignIn ? 'google-sign-in' : ''
            } custom-button`}
            {...other}
        >
            {children}
        </button>
    );
}

export default Button;
