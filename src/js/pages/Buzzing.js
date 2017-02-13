import React from 'react'

import * as buzzActions from '../actions/buzzes.js'

import BuzzesList from '../components/BuzzesList'
import BuzzButton from '../components/BuzzButton'

import Names from '../data/Names'

export default class Buzzing extends React.Component {
  render () {
    const buttons = Names.map((name, i) => {
      return (
        <BuzzButton buzzIn={() => { return this.buzzIn(name)}} name={name} i={i} key={i} />
      )
    })
    console.log('buttons.length', buttons.length)
    return (
      <div>
        <div>
          {buttons}
        </div>
        <div>
          <BuzzesList />
        </div>
      </div>
    )
  }
}