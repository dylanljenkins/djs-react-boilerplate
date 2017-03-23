// The root file of the project.
// This file takes the outermost components of the React application and renders them.
// The only time you'll ever see getElementById!

import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

// Style imports.
import './styles/global.scss';

render(
    <Router history={history}>
        <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </div>
    </Router>,
    document.getElementById('root'),
);
