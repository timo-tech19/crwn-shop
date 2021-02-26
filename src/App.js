import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Auth from './pages/Auth';
import Homepage from './pages/Hompage';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import { setCurrentUser } from './redux/user/userActions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelectors';
class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser, collections } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            // this.setState({ currentUser: user });
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapshot) => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            } else {
                setCurrentUser(null);
            }

            // addCollectionAndDocs(
            //     'collections',
            //     collections.map(({ title, items }) => ({ title, items }))
            // );
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/shop" component={Shop} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <Auth />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
