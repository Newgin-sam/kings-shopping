import React from 'react';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utilities';
import FormInput from '../form-input/form-input.componenet';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';


class SignUp extends React.Component{

    constructor(){
        super();

        this.state = {
            displayName : "",
            email : "",
            password : "",
            confirmPassword : ""     
        }

    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert("password and confirm password does'nt match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            createUserProfileDocument(user, {displayName});
        } catch (err) {
            console.log(err);
        }
        
        this.setState({
            displayName : "",
            email : "",
            password : "",
            confirmPassword : "" 
        });

    }

    handleChange =  event => {
        const {name,value} = event.target;
        this.setState({[name] : value});
    }


    render(){

        const {displayName,email,password,confirmPassword} = this.state;

        return(
            <div className="sign-up">

                <h2 className="title">I Do Not Have A Account</h2>
                <p>Sign-Up with email and password</p>
                
                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormInput type = "text" name="displayName" label = "Display Name" value = {displayName}  onChange={this.handleChange} required/>
                    <FormInput type = "text" name="email" label = "Email" value = {email}  onChange={this.handleChange} required/>
                    <FormInput type = "password" name="password" label = "Password" value = {password}  onChange={this.handleChange} required/>
                    <FormInput type = "password" name="confirmPassword" label = "confirn password" value = {confirmPassword}  onChange={this.handleChange} required/>
                    <CustomButton type = "submit" >Sign-Up</CustomButton>

                </form>

            </div>
        )

    }
}
export default SignUp;