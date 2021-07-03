import React from 'react';
import ReactDOM from 'react-dom';



import { createStore, applyMiddleware, compose } from 'redux';
  // import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import blogpostReducer from './reducers/blogpostReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

// set up store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(blogpostReducer , composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
     <Router>
       <App />
       </Router>
    </Provider>,

    document.getElementById('root'));
