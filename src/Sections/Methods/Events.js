import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const One = `
collection.on('event', callback...
`

const Two = `
// example
Users.on('save', function () {
  let myVariable = Users.find()
})
`
const Three = `
..on('save', ...

..on('find', ...

..on('update', ...

..on('erase', ...
`

export default () => (
  <section className="main--info-section">

    <h1>Events</h1>

    <p>Storm has a lifecycle events for dispatch functions when any crud method is used.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { One }
    </SyntaxHighlighter>

    <p>For example, if we want run find method, when we save data, just need to siscribe to save.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Two }
    </SyntaxHighlighter>

    <p>Every time the save method is executed (in Users collection), find method will be dispatched.</p>
    <br />

    <p>Avalible methods: <b>save</b> , <b>find</b> , <b>update</b> and <b>erase</b></p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Three }
    </SyntaxHighlighter>
  </section>
)
