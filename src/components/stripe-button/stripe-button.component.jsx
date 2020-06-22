import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100 ; 
    const publishableKey = 'pk_test_51Gwn3ZIh1uGbdzVBROiCfTts0etZPVjigDBkiiXbQXwL6yVZQcEPZanLII3eD034qgDFFNdqcni84qkPRjBixqFc00XKjNmN0d';

    const onToken = token =>{
        console.log(token);
        alert("payment has been made successfully")
    }


    return(
        <StripeCheckout 
        label = 'pay now'
        name = 'King shopping ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`your total amount is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )

};

export default StripeCheckoutButton;