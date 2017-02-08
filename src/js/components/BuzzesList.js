import React from 'react'

import Buzz from './Buzz'

export default class BuzzesList extends React.Component {
  render () {
    console.log("BUZZES'", this.props.buzzes)
    const list = this.props.buzzes.map((name, i) => {
      return (
        <Buzz name={name} i={i} key={i} removeBuzz={this.props.removeBuzz} />
      )
    })

    return (
      <ul>
        {list}
      </ul>
    )
  }
}