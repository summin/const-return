
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './_reducers'
import App from './containers/App'
import ReactDOMServer from 'react-dom/server';
var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');

app.get('/', function(request, response) {
    var html = ReactDOMServer.renderToString(
        React.createElement(App)
    );
    response.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});