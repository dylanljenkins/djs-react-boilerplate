// Imports home.scss. Classnames in imported scss files are locally scoped.
// This allows for strongly typed css classes that won't conflict with classnames of other components.

import * as React from 'react';
import {Jumbotron} from 'reactstrap';
import * as styles from './home.scss';

const Home = () => {
    return (
        <Jumbotron className={styles.root}>
            <h1 className="display-3">Hello, world!</h1>
            <p>Welcome to DJ's React Boilerplate. See the source code here: </p>
            <p>Username: admin<br />Password: password</p>
        </Jumbotron>
    );
};

export default Home;
