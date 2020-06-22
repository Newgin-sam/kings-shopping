import React from 'react';
import './App.css';
import { Switch , Route ,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.componenet';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Checkout from './pages/checkout/checkoutPage.component.jsx'

import { auth , createUserProfileDocument } from './firebase/firebase.utilities';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {

  unSubscribeFromAuth= null;

  componentDidMount(){

    const { setCurrentUser } =this.props;
    
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapshot => {
          setCurrentUser({
              id : snapshot.id,
              ...snapshot.data()
            })
          
        });
      }
      else{
        setCurrentUser(userAuth);

      }
    });
  
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />) } />
          <Route  path='/shop' component={ShopPage}/>
          <Route  exact path='/checkout' component={Checkout}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchTOProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchTOProps)(App);
