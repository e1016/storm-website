import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const One = `
import Collection from 'storm-react-native'

/*
* The string passed as argument to Collection
* constructor is used for save data with
* AsyncStorage.
*/
const Users = new Collection('@users:store')
const OtherStore = new Collection('@other:store')

export {
  Users,
  OtherStore
}
`

const Two = `
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { Users } from './Collections'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount () {
    Users.find()
      .then(users =>
        this.setState({ users })
      )
  }
  render () {
    return (
      <View style={ s.container }>
        {
          this.state.users.map((item, k) => (
            <View key={'k-' + k}>
              <Text>{ item.name }</Text>
            </View>
          ))
        }
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
`

const RNIntro = () => (
  <section className="main--info-section">
    <img src="https://i.imgur.com/Ydft8tu.png" width="230" alt="Storm React Native logo"/>

    <div className="separator to-left"></div>

    <h1 className="hidden">Storm React Native</h1>
    <br />
    <br />

    <p>
      Storm provides a fast and simple way to manage storage in React Native, becoming an intermediary between AsyncStorage and the dev in a simple CRUD; <b>save</b> , <b>find</b> , <b>update</b>  and <b>erase</b>.
      <br />
      <br />
      <code>
        npm install storm-react-native
      </code>
    </p>
    <br/>
    <p>Quick start guide: rendering users list</p>
    <br />

    <p><b>react-native-project/Collections.js</b></p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { One }
    </SyntaxHighlighter>

    <p>
      <b>react-native-project/App.js</b>
    </p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Two }
    </SyntaxHighlighter>

    <p>
      <small>
        <a href="https://github.com/e1016/storm-react-native">
          Check this in github
        </a>
      </small>
    </p>

  </section>
)

export default RNIntro
