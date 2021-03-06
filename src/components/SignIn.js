import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import Button from './Button';
import FormInput from './FormInput';
import './SignIn.scss';

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
