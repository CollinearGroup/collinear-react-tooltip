import React, { Component } from 'react'

import { CollinearTooltip } from '@collinear/react-tooltip'

export default class App extends Component {
  render () {
    return (
      <CollinearTooltip>
        <div>
          My Component
        </div>
      </CollinearTooltip>
    )
  }
}
