import * as React from 'react';
import {render} from 'react-dom';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App/App';
import './styles/styleImports';
import {UIStore} from './stores/UIStore';

useStrict(true);

const stores = {
    uiStore: UIStore,
};

render(
    <Provider {...stores}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
