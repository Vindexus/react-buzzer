import React from 'react'
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { Provider } from "react-redux"

import { applyMiddleware, createStore } from "redux"

import axios from "axios"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

import Layout from "./layout/Layout"

import Buzzing from "./pages/Buzzing"
import Names from "./pages/Names"

const initState = {
  buzzes: {
    buzzes: [],
    loading: true,
    error: null
  },
  names: []
}

const middleware = applyMiddleware(promise(), thunk, logger())

const store = createStore(reducer, initState, middleware)

ReactDOM.render(
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Buzzing}></IndexRoute>
      <Route path="names" name="names" component={Names}></Route>
    </Route>
  </Router>
</Provider>, document.getElementById('app'))