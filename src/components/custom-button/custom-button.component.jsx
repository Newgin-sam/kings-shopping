import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children , isGoogleButton, inverted, ...otherprops}) => (
    
    <button className= {` ${inverted ? 'inverted' : '' } ${isGoogleButton ? 'google-sign-in' : '' } custom-button `}  {...otherprops}>
        {children}
    </button>
    
);
export default CustomButton;