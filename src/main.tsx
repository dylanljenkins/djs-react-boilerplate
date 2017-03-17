import * as React from 'react';
import {render} from 'react-dom';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App/App';
import './styles/styleImports';

useStrict(true);

const stores = {};

render(
    <Provider {...stores}>
        <Router history={history}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
