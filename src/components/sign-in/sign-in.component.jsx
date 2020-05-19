import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.componenet';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }
    handleSubmit = event =>{
        
        event.preventDefault();

        this.setState({ email : '' , password : '' });
    }

    handleChange = event =>{
        console.log(event);
        const {value , name} =event.target;
        this.setState({[name] : value});
    }


    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" type="text" name="email" value={this.state.email} handleChange={this.handleChange} required/>
                   
                    <FormInput label="password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required/>

                    <CustomButton type='submit' >SIGN-IN</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;