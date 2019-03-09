import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from'./Home';
import Clases from './Clases';
import Students from './Students';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
      <div>
          <div>
              <Route exact path="/" component={Home}/>
              <Route path="/students" component={Students}/>
              <Router path="/classes" component={Clases}/>
          </div>
          <div>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/students">Students</Link></li>
                  <li><Link to="/classes">Classes</Link></li>
              </ul>
          </div>
      </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
