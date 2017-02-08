import React from 'react'

export default class Buzz extends React.Component {
  render () {
    const { i, name } = this.props

    return (
      <li key={i}>
        {name}
        <button onClick={()=> {
          console.log('i', i)
          this.props.removeBuzz(i)
        }}>x</button>
      </li>
    )
  }
}