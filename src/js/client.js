import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { Provider, connect } from "react-redux"

import { applyMiddleware, createStore } from "redux"

import axios from "axios"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

import * as userActions from "./actions/users"

import Layout from "./layout/Layout"

import Buzzing from "./pages/Buzzing"
import Names from "./pages/Names"

const initState = {
  user: {
    users: [],
    loading: false,
    error: null
  }
}

const error = (store) => (next) => (action) => {
  try {
    next(action)
  }
  catch(ex) {
    console.error("OH HNO", ex)
  }
}

const middleware = applyMiddleware(promise(), thunk, logger(), error)

const store = createStore(reducer, initState, middleware)

store.subscribe(() => {
  console.log('state', store.getState())
})


const user = {
  name: 'Colin' + new Date().getTime().toString().substr(-3),
  role: 'Dunno'
}

ReactDOM.render(
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Buzzing}></IndexRoute>
      <Route path="names" name="names" component={Names}></Route>

    </Route>
  </Router>
</Provider>, document.getElementById('app'))