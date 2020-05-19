import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.componenet';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/signin' component={SignInSignUp} />
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
