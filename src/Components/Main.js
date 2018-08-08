import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Save from '../Sections/Save'
import Find from '../Sections/Find'
import Update from '../Sections/Update'
import Home from '../Sections/Home'

class Main extends Component {
  render () {
    return (
      <Router>
        <div className="main--divider">
          <aside className="aside aside--container">
            <ul>
              <img className="img--aside-img" src="https://i.imgur.com/H2ohkEI.png" width="100"/>
              <h4>Storm</h4>
              <ul>
                <li><Link to="/">Introduction</Link></li>
                <li><Link to="/storage">localStorage</Link></li>
              </ul>
              <h4>Crud</h4>
              <ul>
                <li><Link to="/save">Created – Save</Link></li>
                <li><Link to="/find">Read – Find</Link></li>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/erase">Delete – Erase</Link></li>
              </ul>
              <h4>Methods</h4>
              <ul>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/prototype">Prototype</Link></li>
              </ul>
              <h4>Integrations</h4>
              <ul>
                <li><Link to="/vue">Storm – Vue</Link></li>
                <li><Link to="/react">Storm – React</Link></li>
              </ul>
              <img className="img--aside-img" src="https://i.imgur.com/Ydft8tu.png" width="100"/>

              <h4>React Native</h4>
              <ul>
                <li><Link to="/rn">Introduction</Link></li>
                <li><Link to="/rn-storage">localStorage</Link></li>
              </ul>
              <h4>Crud</h4>
              <ul>
                <li><Link to="/rn-save">Created – Save</Link></li>
                <li><Link to="/rn-find">Read – Find</Link></li>
                <li><Link to="/rn-update">Update</Link></li>
                <li><Link to="/rn-erase">Delete – Erase</Link></li>
              </ul>

            </ul>
          </aside>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/methods" component={Update} />
          </main>
        </div>
      </Router>
    )
  }
}

export default Main
