import React from 'react'
import ReactDOM from "react-dom";

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from './layout/Layout'

import Names from './pages/Names'
import Name from './pages/Name'
import Buzzing from './pages/Buzzing'

const app = document.getElementById('app')

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Buzzing}></IndexRoute>
    <Route path="names" name="names" component={Names}></Route>
    <Route path="name/:index" name="names" component={Name}></Route>
  </Route>
</Router>, app)