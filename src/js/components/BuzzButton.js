import React from 'react'

export default class BuzzButton extends React.Component {
  render () {
    return (
      <button onClick={this.props.buzzIn.bind(this)}>{this.props.name}</button>
    )
  }
}