import React from 'react'
import { connect } from 'react-redux'

import { addBuzz } from '../actions/buzzes'

@connect((store) => {
  return {
    buzzes: store.buzzes,
    names: store.names
  }
})

export default class BuzzButton extends React.Component {

  addBuzz () {
    this.props.dispatch(addBuzz(this.props.name))
  }

  render () {
    return (
      <button onClick={this.addBuzz.bind(this)}>{this.props.name}</button>
    )
  }
}