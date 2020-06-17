import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-items/checkout-items.componenet';
import './checkoutPage.styles.scss';
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selector';

const CheckoutPage = ({cartItems,total})=> (
   <div className="checkout-page">
    <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
    </div>
    {
        cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
    }
    <div className="total">
        <span>Total : ${total}</span>
    </div>
   </div>
)

const mapStateToProps = createStructuredSelector({
    total : selectCartTotal,
    cartItems : selectCartItems
});



export default connect(mapStateToProps)(CheckoutPage);