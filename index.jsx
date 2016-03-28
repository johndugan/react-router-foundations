import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './modules/App.jsx';
import Home from './modules/Home.jsx';
import About from './modules/About.jsx';
import Repos from './modules/Repos.jsx';
import Repo from './modules/Repo.jsx';
import Contact from './modules/Contact.jsx';
import SalesForm from './modules/SalesForm.jsx';
import ManagementForm from './modules/ManagementForm.jsx';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>

            {/*
                `IndexRoute` defines the route that will render
                to the parent component as the `this.props.children`
                when the parent route matches, ie: in this case
                when the user lands on `/`.
            */}
            <IndexRoute component={Home} />
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact}>
                <Route path="/contact/sales" component={SalesForm} />
                <Route path="/contact/management" component={ManagementForm} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));
