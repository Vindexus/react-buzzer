import React from 'react'
import { connect } from 'react-redux'

import Buzz from './Buzz'

import { fetchBuzzes } from '../actions/buzzes'

@connect((state) => {
  return state
})

export default class BuzzesList extends React.Component {
  componentWillMount () {
    this.props.dispatch(fetchBuzzes())
  }

  render () {
    const buzzes = this.props.buzzes.buzzes
    if(this.props.buzzes.loading) {
      return <p>Loading buzzes...</p>
    }

    if(this.props.buzzes.error) {
      return <p>Error: {this.props.buzzes.error}</p>
    }

    console.log('this.props.buzzes', this.props.buzzes)

    if(buzzes.length == 0) {
      return <p>Buzz length: 0</p>
    }

    const list = buzzes.map((buzz, i) => {
      return (
        <Buzz buzz={buzz} key={i} removeBuzz={this.props.removeBuzz} />
      )
    })

    return (
      <ul>
        {list}
      </ul>
    )
  }
}