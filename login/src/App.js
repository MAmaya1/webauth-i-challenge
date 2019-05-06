import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1>Login</h1>
      <Route exact path='/' component={login}/>
      <PrivateRoute path='/protected' component={UsersView}/>
    </Router>
  );
}

export default App;