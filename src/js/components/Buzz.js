import React from 'react'
import { connect } from 'react-redux'

import { removeBuzz } from '../actions/buzzes'

@connect((store) => {
  console.log('store in Buzz', store.buzzes)
  return {
    buzzes: store.buzzes,
    vin: 'dexus'
  }
})

export default class Buzz extends React.Component {
  removeBuzz () {
    this.props.dispatch(removeBuzz(this.props.buzz.id))
  }

  render () {
    const { i, id } = this.props.buzz

    let { name } = this.props.buzz

    if(this.props.buzzes.removingBuzz == this.props.buzz.id) {
      name = <strong>DELETING...</strong>
    }

    return (
      <li key={id}>
        {name}
        <button onClick={this.removeBuzz.bind(this)}>x</button>
      </li>
    )
  }
}