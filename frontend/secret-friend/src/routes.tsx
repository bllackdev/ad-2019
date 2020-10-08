import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import FriendList from './pages/FriendList';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/friend-list" component={FriendList} />
    </BrowserRouter>
  )
}

export default Routes;
