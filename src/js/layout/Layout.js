import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'

import * as userActions from '../actions/users'

@connect((store) => {
  return {
    user: store.user
  }
})

export default class Layout extends React.Component {
  componentWillMount () {
    setTimeout(function () {
      this.props.dispatch(userActions.fetchUsers())
    }.bind(this), 2000)
  }
  render () {
    const msg = this.props.user.loading ? "LOADING" : this.props.user.users.length
    return (
      <div>
      <Header></Header>
      {this.props.children}
      </div>
    )
  }
}