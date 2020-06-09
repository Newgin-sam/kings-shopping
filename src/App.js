import React from 'react';
import './App.css';
import { Switch , Route ,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.action';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.componenet';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utilities';

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
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser : state.user.currentUser
})

const mapDispatchTOProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchTOProps)(App);
