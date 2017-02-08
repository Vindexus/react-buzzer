import React from 'react'

import Names from '../data/Names'

export default class Name extends React.Component {
  render () {
    const name = Names[parseInt(this.props.params.index)]
    const last = this.props.location.query.last
    return (
      <div>{name} {last}</div>
    )
  }
}