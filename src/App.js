import React from 'react';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.componenet';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utilities';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : null 
    };
  }

  unSubscribeFromAuth= null;

  componentDidMount(){

    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapshot => {
          this.setState({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      else{
        this.setState({currentUser:userAuth});

      }
    });
  
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/signin' component={SignInSignUp} />
          <Route  path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
