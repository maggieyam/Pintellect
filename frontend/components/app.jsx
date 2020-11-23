import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import SignUpFormContainer from './session/signup_container';
import LogInFormContainer from './session/login_container.jsx';
import GreetingContainer from "./greeting/greeting_container";
import ModalContainer from "./modal/modal_container";
import CreateBoardContainer from "./boards/board_form/create_board_container";
import EditBoardContainer from "./boards/board_form/create_board_container";
import BoardShowContainer from './boards/show/board_show_container';
// import BoardShowContainer from "./show/board_show_container";
import BoardIndexContainer from "./boards/index/board_index_container";
import {AuthRoute, ProtectedRoute} from '../utils/route_util';

const App = () => (
  <div>
    <ModalContainer />
    <header>
      <GreetingContainer />
    </header>
    {/* <Route path='/' component={}/> */}
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/:authorId/create" component={CreateBoardContainer} />
      <Route exact path="/:authorId/:boardId/edit" component={EditBoardContainer} />
      {/* <Route exact path="/:authorId/:boardId" component={BoardShowContainer} /> */}
      <Route exact path="/:authorId" component={BoardIndexContainer} />
    </Switch>
  </div>
);

export default App;
