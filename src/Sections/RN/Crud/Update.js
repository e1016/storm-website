import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const One = `
...
this.state = {
  userId: '12938129376'
}
...

Users.update({
  // where field
  where: {
    _id: this.state.userId
  },
  // set field
  set: {
    newField: 'this user was affected'
  }
})
.then(updatedStore => {
  console.log(updatedStore)
})

// prints

/*
* based on data from
* https://storm.eliseo.io/rn-save
*/

[
  {
    name: 'Eliseo',
    age: 21,
    gender: 31,
    newField: 'this user was affected',
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

export default () => (
  <section className="main--info-section">
    <h1>Update</h1>

    <p>Updating collections is easy, we need to use <b>update</b> method, and define two main fields, <b>where</b> and <b>set</b>.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { One }
    </SyntaxHighlighter>

    <p><b>update</b> method, return a updated versión of store. We can set more than one condition in <b>where</b> and more than one field for set in <b>set</b>.</p>

    <p>
      <small>
        <a target="_blank" href="https://github.com/e1016/storm-react-native/blob/master/lib/methods/Update.js">
          Check this in github
        </a>
      </small>
    </p>

  </section>
)
