import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import './Header.scss';

import { ReactComponent as Logo } from '../assets/crown.svg';
import { selectCartHidden } from '../redux/cart/cartSelectors';
import { selectCurrentUser } from '../redux/user/userSelectors';

function Header({ currentUser, hidden }) {
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
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        Sign In
                    </Link>
                )}
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
