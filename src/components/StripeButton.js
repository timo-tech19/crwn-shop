import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pubKey =
        'pk_test_51INviUGZjUGy3UAuR0uFDAAqkL4MZMMbSYUzHunZJubFRm8qyZloUuqJAAc95N5zvByFkIMffVMXNfbeK1YVbnAA00Rrjqa68A';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Shop"
            billigAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={pubKey}
        />
    );
};

export default StripeButton;
