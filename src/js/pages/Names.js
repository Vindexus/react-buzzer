import React from 'react'

import NameData from '../data/Names'

export default class Names extends React.Component {
  render () {
    const names = NameData.map((name, i) => {
      const sep = i == 0 ? '' : ', '
      return (
        <span key={i}>{sep}<strong>{name}</strong></span>
      )
    })
    return (
      <section id="colin">
        Names: {names}
      </section>
    )
  }
}