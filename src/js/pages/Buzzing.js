import React from 'react'

import BuzzesList from '../components/BuzzesList'
import BuzzButton from '../components/BuzzButton'

import Names from '../data/Names'

export default class Buzzing extends React.Component {
  constructor () {
    super()
    this.state = {
      buzzes: []
    }
  }

  removeBuzz (index) {
    let buzzes = this.state.buzzes
    buzzes.splice(index, 1)
    this.setState({buzzes})
  }

  buzzIn (name) {
    if(this.state.buzzes.indexOf(name) >= 0) {
      return
    }
    let buzzes = this.state.buzzes
    buzzes.push(name)
    this.setState({buzzes})
  }

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
          <BuzzesList buzzes={this.state.buzzes} removeBuzz={this.removeBuzz.bind(this)} />
        </div>
      </div>
    )
  }
}