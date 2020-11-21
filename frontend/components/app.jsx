import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import SignUpFormContainer from './session/signup_container';
import LogInFormContainer from './session/login_container.jsx';
import GreetingContainer from "./greeting/greeting_container";
import ModalContainer from "./modal/modal_container";
import CreateBoardContainer from "./board_form/create_board_container";
import EditBoardContainer from "./board_form/edit_board_container";
import ShowBoardContainer from "./show/show_container";
import BoardIndexContainer from "./index/board_index_container";
import SearchContainer from "./search/search_container";
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
      <Route exact path="/:authorId/create" component={CreateBoardContainer} />
      <Route exact path="/:authorId/:boardId/edit" component={EditBoardContainer} />
      <Route exact path="/:authorId/:boardId" component={ShowBoardContainer} />
      <Route exact path="/:authorId" component={BoardIndexContainer} />

    </Switch>
  </div>
);

export default App;
