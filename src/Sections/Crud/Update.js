import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const One = `
Users.update({
  where: {
    gender: 'M'
  },
  set: {
    gender: 'Male'
  }
})
`

const Two = `
...update({
  where: {
    gender: 'M',
    name: 'Eliseo',
    age: 14
  },
  set:...
`
const Three = `
...set: {
  gender: 'Male',
  name: 'Eliseo',
  newField: 'this register was affected'
})...
`

export default () => (
  <section className="main--info-section">

    <h1>Update</h1>

    <p>Update data in store is more easy with Storm, for example, we will set gender <b>'Male'</b> where gender is equals to <b>'M'</b></p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { One }
    </SyntaxHighlighter>

    <p>On where statement we set conditions for objects, only if stored object properties match with this definitions will be updates, where can be use more than one condition.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Two }
    </SyntaxHighlighter>

    <p>In the other hand, all properties in 'set' will attach or replace from stored data, if the property exists in then item, they value will be replaced, else, this will be added.</p>

      <SyntaxHighlighter language="javascript" style={ theme }>
        { Three }
      </SyntaxHighlighter>

  </section>
)
