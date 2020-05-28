import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUP from '../../components/sign-up/sigin-up.componenet';

import './sign-in-sign-up.styles.scss'

const SignInSignUp = () => (
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUP />
    </div>
)
export default SignInSignUp;