import React from 'react';
import MealMenu from '../src/container/MealMenu';
import ChickenMenu  from '../src/container/ChickenMenu';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      
      <Switch>
        <Route exact path="/" component={MealMenu} />
        <Route exact path="/ChickenMenu" component={ChickenMenu}>
          {/* <Redirect to="/ChickenMenu"/> */}
        </Route>
      
      </Switch>
    </div>
  );
};