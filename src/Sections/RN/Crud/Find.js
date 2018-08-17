import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const One = `
import Collection from 'storm-react-native'

// define our AsyncStorage name
const Users = new Collection('@users:store')

export {
  Users
}
`
const Two = `
  import { Users } from './Collections.js'
  ...

  ...
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    Users.find()
      .then(users =>
        this.setState({
          users
        })
      )
  }
  ...
`

const Three = `
[
  {
    name: 'Eliseo',
    age: 21,
    gender: 31,
    _id: '12938129376'
  },
  {
    name: 'Juan',
    age: 22,
    gender: 'M',
    _id: '49869418364'
  }
]
`

const Four = `
// implementation
...
Users.find( /* conditions */ )
  .then(
...

/*
* example
*/

...
Users.find({
  name: 'Eliseo'
})
  .then(result => {
    console.log(result)
  })

// prints

[{
  name: 'Eliseo',
  age: 21,
  gender: 31,
  _id: '12938129376'
}]
...
`

const Five = `
.find({
  name: 'Eliseo',
  gender: 'M'
  ...
})
`

const Six = `
...
Users.find({
  name: 'Eliseo',
  age: 21
}, '_id gender') // <- using spaces

.then(result => {
  console.log(result)
})

// prints

[{
  _id: '12938129376',
  gender: 31
}]
...
`

export default () => (
  <section className="main--info-section">
    <h1>Find</h1>

    <p>To find in collectino is so easy, for first we need create a collection, <a target="_blank" href="/rn">read more about collections</a></p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { One }
    </SyntaxHighlighter>

    <p>Right away we need import this collection.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Two }
    </SyntaxHighlighter>

    <p><b>find</b> returns an Array with all collection, an Array of objects, and we can set this in state, in this case, if we have stored the same data used in <a href="/rn-save" target="_blank">save section</a> find will return:</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Three }
    </SyntaxHighlighter>

    <p><b>find</b> can too request specific elements, with specific data:</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Four }
    </SyntaxHighlighter>

    <p>The last execution will return us to all the elements that have a name field, whose value is 'Eliseo'. we can be more specific, using more than one condition.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Five }
    </SyntaxHighlighter>

    <p>As last, is posible specify what fields we need.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Six }
    </SyntaxHighlighter>

    <p>
      <small>
        <a target="_blank" href="https://github.com/e1016/storm-react-native/blob/master/lib/methods/Find.js">
          Check this in github
        </a>
      </small>
    </p>

  </section>
)
