import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import Nav from './nav';
import Sidebar from './sidebar';
import Academic from './academic';
import Others from './others';
import ContactMe from './contact';
import ExperienceAchievementContainer from './experience-achievement-container';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <div>
    <Nav/>
    <div className="container-fluid content">
      <div className="row">
        <div className="col-md-3">
          <Sidebar/>
        </div>
        <div className="col-md-9">

        <div className="panel panel-danger">
          <div className="panel-body">
            <Route exact path="/" component={Home}/>
            <Route path="/academic" component={Academic}/>
            <Route path="/experience" component={ExperienceAchievementContainer}/>
            <Route path="/others" component={Others}/>
            <Route path="/contact" component={ContactMe}/>
          </div>
        </div>


        </div>
      </div>
    </div>

    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
