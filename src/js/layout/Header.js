import React from 'react'
import { IndexLink, Link } from 'react-router'

export default class Header extends React.Component {
  render () {
    return <div>
      <h1>Header</h1>
      <ul>
        <li><IndexLink to="/">Home</IndexLink></li>
        <li><Link to="names">Names</Link></li>
      </ul>
    </div>
  }
}