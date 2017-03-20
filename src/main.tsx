import * as React from 'react';
import {render} from 'react-dom';
import {useStrict} from 'mobx';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App/App';
import './styles/styleImports';

useStrict(true);

render(
    <Router history={history}>
        <App/>
    </Router>,
    document.getElementById('root'),
);
