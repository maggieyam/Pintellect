import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import SignUpFormContainer from './session/signup_container';
import LogInFormContainer from './session/login_container.jsx';
import SearchContainer from './search/search_container'
import Modal from "./modal/modal";
// import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={SearchContainer} />
    </Switch>
    {/* <Route path='/' component={}/> */}
  </div>
);

export default App;
