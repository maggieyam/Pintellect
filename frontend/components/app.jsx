import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import SignUpFormContainer from './session/signup_container';
import LogInFormContainer from './session/login_container.jsx';
import GreetingContainer from "./greeting/greeting_container";
import ModalContainer from "./modal/modal_container";
// import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <ModalContainer />
    <header>
      {/* <Link to="/" >
        <ul>home</ul>
      </Link> */}
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      {/* <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
    {/* <Route path='/' component={}/> */}
  </div>
);

export default App;
