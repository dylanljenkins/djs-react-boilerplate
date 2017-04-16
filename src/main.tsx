// The root file of the project.
// This file takes the outermost components of the React application and renders them.
// The only time you'll ever see getElementById!

import * as React from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Shell/Header/Header';
import Home from './components/Home/Home';
import {Footer} from './components/Shell/Footer/Footer';
import {MDPage} from './components/CMS/MD';
import {CustomSpinner} from './components/Spinner/CustomSpinner';
import {PropertyGrid} from './components/Property/ProperyList';
import * as styles from './styles/main.scss';

// Style imports.
import './styles/global.scss';

// TODO Markdown "static page" CMS. Convert to JSON and post to Mongo. Pull from Mongo and display in an MDView.
// TODO "IProperty" CMS. Create and manage properties from an admin interface. Categorise these properties.
// TODO Store and retrieve these properties as JSON in Mongo. Retrieve and for use listing/displaying the properties.

// TODO Mock up output JSON for both of these tasks, then store them in Mongo. Then think about creating them from a gui.

render(
    <Router history={history}>
        <div className={styles.root}>
            <div className={styles.content}>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={() => (<MDPage title="About Us"/>)}/>
                <Route path="/spinner" component={CustomSpinner}/>
                <Route path="/properties" component={PropertyGrid}/>
            </div>
            <Footer/>
        </div>
    </Router>,
    document.getElementById('root'),
);
