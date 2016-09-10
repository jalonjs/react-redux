import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App from './app';
import Todo from './components/todo';
import About from './components/about';

const routes = (
    <Route path="/" component={App} >
        <IndexRedirect to="/todo"/>
        <Route path="todo" component={Todo}  />
        <Route path="about" component={About}  />
    </Route>
);

export default routes;