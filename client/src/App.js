import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import NavBar from './components/layout/NavBar';
import Register from './components/forms/Register';
import Login from './components/forms/Login';

import EditProfile from './components/forms/EditProfile';
import PlayersListPage from './components/pages/PlayersList/PlayersListPage';
import PlayerPage from './components/pages/PlayerProfile/PlayerPage';
import LandingPage from './components/pages/LandingPage/LandingPage';
import CourtsListPage from './components/pages/CourtsList/CourtsListPage';
import CourtViewPage from './components/pages/CourtView/CourtViewPage';
import AdminPage from './components/pages/AdminPage/AdminPage';
import WriteaReviewPage from './components/pages/WriteaReviewPage/WriteaReviewPage';

import CheckIn from './components/checkin/CheckIn';
import AdminCheckIn from './components/checkin/AdminCheckIn';

// Import the sass styling
import './styles/main.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path='/' component={LandingPage} />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/player/me/edit' component={EditProfile} />
          <Route exact path='/players' component={PlayersListPage} />
          <Route exact path='/player/:id' component={PlayerPage} />
          <Route exact path='/courts' component={CourtsListPage} />
          <Route exact path='/court/:id' component={CourtViewPage} />
          <Route exact path='/writeareview/:id' component={WriteaReviewPage} />

          <Route exact path='/checkin' component={CheckIn} />
          <Route exact path='/admincheckin' component={AdminCheckIn} />

          {/* MAKE SURE isAdmin is true to go here */}
          <Route exact path='/account/admin' component={AdminPage} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
