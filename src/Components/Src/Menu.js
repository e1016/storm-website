import React from 'react'

const HamburgerMenu = ({ Main }) => (
  <div
    className={Main.state.activeMenu + ' h-menu'}
    onClick={
      () => Main.setState({
        activeMenu: (
          Main.state.activeMenu === 'open'
            ? 'closed'
            : 'open'
        )
      })
    }>
    <span className="bar bar-1"></span>
    <span className="bar bar-2"></span>
    <span className="bar bar-3"></span>
  </div>
)

export default HamburgerMenu
