import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import './Auth.scss';

function Auth() {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Auth;
