import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import CartItem from './CartItem';
import './CartDropdown.scss';
import { selectCartItems } from '../redux/cart/cartSelectors';

function CartDropdown({ cartItems }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <Button>Go to Checkout</Button>
        </div>
    );
}

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
