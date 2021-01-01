import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import ModalContainer from "./modal/modal_container";
import CreateBoardContainer from "./boards/board_form/create_board_container";
// import EditBoardContainer from "./boards/board_form/create_board_container";
import BoardShowContainer from './boards/show/board_show_container';
import CreatePinContainer from './pins/pins_form/pins_create_form_container';
import EditPinContainer from './pins/pins_form/pins_edit_form_container';
import BoardIndexContainer from "./boards/index/board_index_container";
import PinIndexContainer from "./pins/pins_index/pins_index_container";
import PinShowContainer from "./pins/pins_show/pin_show_container";
import { ProtectedRoute } from '../utils/route_util';
import About from './about';
import EditProfileContainer from './profile/edit_profile_container';
import NavbarContainer from './navbar/navbar_container';
// import SearchPinContainer from './search/';

const App = () => (
  <div>
    <ModalContainer />
    <header>
      <NavbarContainer />

      <Route exact path="/" component={GreetingContainer}/>
      <Route exact path="/about" component={About}/>
    </header>
    <Switch>
      <ProtectedRoute exact path="/pin-builder" component={CreatePinContainer} />
      <ProtectedRoute exact path="/pin/:pinId/editor" component={EditPinContainer} />
      <ProtectedRoute exact path="/:authorId/create" component={CreateBoardContainer} />
      <ProtectedRoute exact path="/settings" component={EditProfileContainer} />
      <ProtectedRoute exact path="/board/:boardId" component={BoardShowContainer} />
      <ProtectedRoute exact path="/boards/_saved" component={BoardIndexContainer} />
      <ProtectedRoute exact path="/" component={PinIndexContainer} />
      {/* <ProtectedRoute exact path="/search" component={SearchPinContainer} /> */}
      <ProtectedRoute exact path="/pin/:pinId" component={PinShowContainer} />

    </Switch>
  </div>
);

export default App;
