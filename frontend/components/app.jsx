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
import CreatePinContainer from './pins/pins_form/pins_create_form_container';
import BoardIndexContainer from "./boards/index/board_index_container";
import PinIndexContainer from "./pins/pins_index/pins_index_container";
import PinShowContainer from "./pins/pins_show/pin_show_container";
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
      <ProtectedRoute exact path="/pin-builder" component={CreatePinContainer} />
      <ProtectedRoute exact path="/:authorId/create" component={CreateBoardContainer} />
      <ProtectedRoute exact path="/:authorId/:boardId/edit" component={EditBoardContainer} />
      <ProtectedRoute exact path="/board/:boardId" component={BoardShowContainer} />
      <ProtectedRoute exact path="/:authorId" component={BoardIndexContainer} />
      <ProtectedRoute exact path="/" component={PinIndexContainer} />
      <ProtectedRoute exact path="/pin/:pinId" component={PinShowContainer} />
    </Switch>
  </div>
);

export default App;
