import React from 'react';
import './App.css';
import Home from './components/pages/home'
import Play from './components/pages/play'

import { Route , Switch , Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/play' component={Play}></Route>
        <Redirect to='/home'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
