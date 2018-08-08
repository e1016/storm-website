import React, { Component } from 'react'

class Button extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    if (this.props.href) {
      return (
        <a
          href={this.props.href}
          className="button--special-wave">
          { this.props.children }
        </a>
      )
    } else {
      return (
        <button
          onClick={this.props.onClick}
          className="button--special-wave">
          { this.props.children }
        </button>
      )
    }
  }
}

export default Button