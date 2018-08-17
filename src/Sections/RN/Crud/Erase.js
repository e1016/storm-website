import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const One = `
Users.erase()
  .then(() => {
    console.log(
      'All data was deleted!'
    )
  })
`

const Two = `
Users.erase({
  name: 'Juan'
})
  .then(data => {
    console.log(data)
  })

// prints

/*
* based on data from
* https://storm.eliseo.io/rn-save
*/

{
  keeped: [
    {
      name: 'Eliseo',
      age: 21,
      gender: 'M',
      _id: '12938129376'
    }
  ],
  erased: [
    {
      name: 'Juan',
      age: 22,
      gender: 'M',
      _id: '49869418364'
    }
  ]
}
`

const Three = `
...
Users.erase( /* conditions */ )
  .then( ({ keeped }) => {
    // keeped elements is avalible
  })
...
`

export default () => (
  <section className="main--info-section">
    <h1>Erase</h1>

    <p>Erase can be used in two ways, first without parameters, and this only delete all data in collection.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { One }
    </SyntaxHighlighter>

    <p>But can be used too using conditions.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Two }
    </SyntaxHighlighter>

    <p>Erase method returns two main fields, <b>keeped</b> elements and <b>erased</b> elements. As you can deduce, the elements that have coincided with the conditions (and have been deleted) will return in erased, and those that are kept in keeped</p>
    <br />

    <p>Destruncturing in then arguments...</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Three }
    </SyntaxHighlighter>

    <p>
      <small>
        <a target="_blank" href="https://github.com/e1016/storm-react-native/blob/master/lib/methods/Erase.js">
          Check this in github
        </a>
      </small>
    </p>

  </section>
)
