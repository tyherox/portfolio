import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { applyRouterMiddleware, Router, Route, browserHistory, IndexRedirect} from 'react-router'
import { useScroll } from 'react-router-scroll';

import App from '../imports/ui/pages/App.jsx';
import Home from '../imports/ui/pages/home.jsx';
import Project from '../imports/ui/pages/project.jsx';

Meteor.startup(() => {
  render(
      <Router history={browserHistory}
              render={applyRouterMiddleware(useScroll())}>
        <Route path="/" component={App}>
          <IndexRedirect to="/home"/>
            <Route path="/home" component={Home}/>
            <Route path="project" component={Project}/>
            <Route path="project/:id" component={Project}/>
        </Route>
      </Router>
      ,document.getElementById('render-target')
  );
});
