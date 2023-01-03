import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';

// const PrivateRoute = ({ component: Component, user, ...rest }) => {
//   const routeChecker = (taco) =>
//     user ? (
//       <Component {...taco} user={user} />
//     ) : (
//       <Redirect to={{ pathname: '/', state: { from: taco.location } }} />
//     );
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

// PrivateRoute.propTypes = {
//   component: PropTypes.func,
//   user: PropTypes.any,
// };

export default function Routes({ user, toggle }) {
  console.warn('delete this from Routes', toggle);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home
            user={user}
            toggle={toggle}
            />
          }
        />
        {/* <PrivateRoute
          exact
          path='/drivers'
          user={user}
          component={() => <Racers racers={racers}
          setRacers={setRacers} user={user}/>}
        />
        <PrivateRoute
          path='/drivers/:firebaseKey'
          user={user}
          component={SingleRacer}
        />
        <PrivateRoute
          path='/add-drivers'
          user={user}
          component={() => <AddRacer setRacers={setRacers} user={user}/>}
        /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  toggle: PropTypes.string,
};
