import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {
  Intro,
  Storage
} from '../Sections/Storm'

import {
  Save,
  Find,
  Update,
  Erase
} from '../Sections/Crud'

import {
  Events,
  Prototype
} from '../Sections/Methods'

import {
  StormReact,
  StormVue
} from '../Sections/Integrations'

class Main extends Component {
  cc (argm) {
    return (window.location.pathname === argm)
     ? 'link link-on'
     : 'link'
  }

  componentDidMount () {
    document.querySelectorAll('.link').forEach(el =>
      el.addEventListener('click', e => {
        document.querySelector('.link-on')
          .classList.remove('link-on')
        
        e.currentTarget.classList.add('link-on')
      })
    )
  }

  render () {
    return (
      <Router>
        <div className="main--divider">
          <aside className="aside aside--container">
            <ul>
              <img className="img--aside-img" src="https://i.imgur.com/H2ohkEI.png" width="100"/>
              <h4>Storm</h4>
              <ul>
                <li className={ this.cc('/') }><Link to="/">Introduction</Link></li>
                <li className={ this.cc('/storage') }><Link to="/storage">localStorage</Link></li>
              </ul>
              <h4>Crud</h4>
              <ul>
                <li className={ this.cc('/save') }><Link to="/save">Created – Save</Link></li>
                <li className={ this.cc('/find') }><Link to="/find">Read – Find</Link></li>
                <li className={ this.cc('/update') }><Link to="/update">Update</Link></li>
                <li className={ this.cc('/erase') }><Link to="/erase">Delete – Erase</Link></li>
              </ul>
              <h4>Methods</h4>
              <ul>
                <li className={ this.cc('/events') }><Link to="/events">Events</Link></li>
                <li className={ this.cc('/prototype') }><Link to="/prototype">Prototype</Link></li>
              </ul>
              <h4>Integrations</h4>
              <ul>
                <li className={ this.cc('/vue') }><Link to="/vue">Storm – Vue</Link></li>
                <li className={ this.cc('/react') }><Link to="/react">Storm – React</Link></li>
              </ul>
              <img className="img--aside-img" src="https://i.imgur.com/Ydft8tu.png" width="100"/>
              <h4>React Native</h4>
              <ul>
                <li className={ this.cc('/rn') }><Link to="/rn">Introduction</Link></li>
                <li className={ this.cc('/rn/storage') }><Link to="/rn/storage">localStorage</Link></li>
              </ul>
              <h4>Crud</h4>
              <ul>
                <li className={ this.cc('/rn/save') }><Link to="/rn/save">Created – Save</Link></li>
                <li className={ this.cc('/rn/find') }><Link to="/rn/find">Read – Find</Link></li>
                <li className={ this.cc('/rn/update') }><Link to="/rn/update">Update</Link></li>
                <li className={ this.cc('/rn/erase') }><Link to="/rn/erase">Delete – Erase</Link></li>
              </ul>
            </ul>
          </aside>
          <main>
            <Route exact path="/" component={ Intro } />
            <Route path="/storage" component={ Storage } />
            
            <Route path="/save" component={ Save } />
            <Route path="/find" component={ Find } />
            <Route path="/update" component={ Update } />
            <Route path="/erase" component={ Erase } />
            <Route path="/events" component={ Events } />
            <Route path="/prototype" component={ Prototype } />

            <Route path="/react" component={ StormReact } />
            <Route path="/vue" component={ StormVue } />
          </main>
        </div>
      </Router>
    )
  }
}

export default Main
