import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { auth } from './firebase/firebase.utils';
import Auth from './pages/Auth';
import Homepage from './pages/Hompage';
import Shop from './pages/Shop';

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
