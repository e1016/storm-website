import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const One = `
[{
  name: 'Eliseo'
},{
  name: 'Juan'
},{
  name: 'Eduardo'
}]

// using this

Users.find().first()

// first return
{
  name: 'Eliseo'
}
`

const Two = `
const allElements = User.find()

const firstElement = allElements.first()
const lastElement = allElements.last()
`

export default () => (
  <section className="main--info-section">
    <h1>Prototype</h1>
    <p>Using Storm Collections methods.</p>
    <br />

    <p>Collection elements has some methods and properties for make more easy our work, for example we can use <b>first</b> and <b>last</b> methods from Collection requested in a find response.</p>
    <br />

    <p>in this collection.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { One }
    </SyntaxHighlighter>

    <p>Is posible too store value in a variable and use the methods later.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Two }
    </SyntaxHighlighter>
  </section>
)
