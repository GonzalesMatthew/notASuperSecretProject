import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';

export default function Routes({ toggle }: InferProps<typeof Routes.propTypes>) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home
            toggle={toggle}
            />
          }
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

Routes.propTypes = {
  toggle: PropTypes.string,
};
