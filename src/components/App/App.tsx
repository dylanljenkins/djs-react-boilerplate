import * as React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import {Route} from 'react-router';
import About from '../About/About';
import Contact from '../Contact/Contact';

const App = () => {
    return (
        <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </div>
    );
};

export default App;
