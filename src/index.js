import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

render(
    <Provider store={store}>
        <Router>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>,
    document.getElementById('root')
);
