/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';     // react-DOM was split off from React in React1.4 so need to import this explicitly.
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; // Provider is a higher order component that attaches our store to our React container componaents
import { Router, browserHistory } from 'react-router';  //browserHistory for nice clean URL's instead of hash-based URLs
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store=configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
