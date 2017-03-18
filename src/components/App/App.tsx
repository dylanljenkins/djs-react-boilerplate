import * as React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import {Route} from 'react-router';
import About from '../About/About';

const App = () => {
    return (
        <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    );
};

export default App;
