import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home';
import HomePhotog from './Components/Home/HomePhotog';

export default(
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/photographer' component={HomePhotog}/>
  </Switch>
)
