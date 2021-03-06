import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';


const App = () => {
  return (
    <main className="container" role="main">
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact
        />
        <Route
          path='/cart'
          component={CartPage}
          exact
        />
      </Switch>
    </main>
  );
};

export default App;
