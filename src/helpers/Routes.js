import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Releases from '../views/Releases';
import Donate from '../views/Donate';
import NotFound from '../views/NotFound';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({ user }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path='/'
          component={Home}
          user={user}
        />
        <Route
          exact path='/releases'
          component={Releases}
          user={user}
        />
        <Route
          exact path='/contact'
          component={Donate}
          user={user}
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
        <Route path='*' component = {NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};
