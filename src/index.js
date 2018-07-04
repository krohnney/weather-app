import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/jquery/dist/jquery';
import './../node_modules/popper.js/dist/popper';
import './../node_modules/bootstrap/dist/js/bootstrap';
import './index.css';

import reducers from './reducers';
import App from './components/App';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

const store = createStore(
    reducers,
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/weather" component={Weather}/>
                        <Route path="/forecast" component={Forecast}/>
                        <Redirect exact from="/" to="weather"/>
                    </Switch>
                </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
