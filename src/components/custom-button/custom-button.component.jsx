import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children , isGoogleButton , ...otherprops}) => (
    
    <button className= {` ${isGoogleButton ? 'google-sign-in' : '' } custom-button `}  {...otherprops}>
        {children}
    </button>
    
);
export default CustomButton;