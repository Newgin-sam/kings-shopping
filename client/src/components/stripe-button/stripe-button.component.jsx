import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Gwn3ZIh1uGbdzVBROiCfTts0etZPVjigDBkiiXbQXwL6yVZQcEPZanLII3eD034qgDFFNdqcni84qkPRjBixqFc00XKjNmN0d';

  const onToken = token => {
    console.log(price);
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount : priceForStripe,
        token
      }
    }).then( response => {
      alert ('payment successfull');
    }).catch(error => {
      console.log('payment error: ',JSON.parse(error));
      alert('payment unsuccessfull, there is an error in transaction please use correct credentials');
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='king Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
