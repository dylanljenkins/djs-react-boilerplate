import * as React from 'react';
import * as styles from './styles.scss';
import {Button} from 'reactstrap';

const App = () => {
    return (
        <div>
            <p className={styles.main}>Sup</p>
            <Button color="danger">Test</Button>
        </div>
    );
};

export default App;
