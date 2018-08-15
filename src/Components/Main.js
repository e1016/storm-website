import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Menu from './Src/Menu'

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

import {
  RNIntro,
  RNStorage
} from '../Sections/RN/Storm'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeMenu: 'closed'
    }
  }

  componentDidMount () {
    document.querySelectorAll('.link').forEach(el =>
      el.addEventListener('click', e => {
        document.querySelector('.link-on')
          .classList.remove('link-on')

        e.currentTarget.classList.add('link-on')
        this.setState({ activeMenu: 'closed' })
      })
    )
  }

  cc (argm) {
    return (window.location.pathname === argm)
      ? 'link link-on'
      : 'link'
  }

  render () {
    return (
      <Router>
        <div className="main--divider">
          <aside className={'aside aside--container ' + this.state.activeMenu}>
            <ul>
              <img className="img--aside-img" src="https://i.imgur.com/H2ohkEI.png" width="100" alt="Storm logo"/>
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
              <img className="img--aside-img" src="https://i.imgur.com/Ydft8tu.png" width="100" alt="Storm for React Native logo"/>
              <h4>React Native</h4>
              <ul>
                <li className={ this.cc('/rn') }><Link to="/rn">Introduction</Link></li>
                <li className={ this.cc('/rn-storage') }><Link to="/rn-storage">AsyncStorage</Link></li>
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
          <main className={this.state.activeMenu}>
            <Menu
              Main={this}/>

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

            {/* React Native */}

            <Route path="/rn" component={ RNIntro } />
            <Route path="/rn-storage" component={ RNStorage } />
          </main>
        </div>
      </Router>
    )
  }
}

export default Main
