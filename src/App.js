import React from 'react';
import {withRouter} from 'react-router-dom';
import './Components/style.scss';
import routes from '../src/routes';

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default withRouter(App);
