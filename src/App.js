import React from 'react';

import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop/hats' component={Hats}/>
    </Switch>
  );
}

export default App;
