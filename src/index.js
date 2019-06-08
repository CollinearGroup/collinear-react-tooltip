import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// import styles from './styles.css'

export class CollinearTooltip extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      mouseX: 0,
      mouseY: 0,
      isBottom: false
    }
  }

  onMouseEnter = (e) => this.setState({ isVisible: true })

  onMouseLeave = (e) => this.setState({ isVisible: false })
  
  onMouseMove = (e) => {

  }

  renderChildren = () => {
    const newProps = {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onMouseMove: this.onMouseMove
    }

    if (typeof this.props.children === 'function') {
      return this.props.children(newProps) 
    } else if (this.props.children) {
      return React.cloneElement(this.props.children, newProps)
    }
  }

  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const {
      isVisible
    } = this.state

    const styles = {
      visibility: isVisible ? 'visible' : 'hidden'
    }

    return (
      <div>
        <div style={styles}>
          Example Component:
        </div>
        {this.renderChildren()}
      </div>

    )
  }
}
