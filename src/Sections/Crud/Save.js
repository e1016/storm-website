import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const First = `
// Create a collection
const Users = new Collection('@usersReference')

Users.save({
  name: 'Eliseo',
  age: 34,
  gender: 'M'
})
`

const Second = `
// bad ❌
Users.save('name')

// bad ❌
Users.save([
  {
    name: 'Eliseo',
    age: 21
  },{
    name: 'Juan',
    age: 34
  }
])

// fine ✅
Users.save({
  name: 'Eliseo',
  age: 34,
  gender: 'M'
})
`

export default () => (
  <section className="main--info-section">
    <h1>Save</h1>

    <p>For save data (assuming we use the users collection) you just need to use the <b>save</b> method of users and pass a JSON as argument with "the user information" and don't need to have a static schema.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { First }
    </SyntaxHighlighter>

    <p>This way we easily save information, if the method is executed with a string as a parameter it should work, but some sorting methods need an object as an argument.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Second }
    </SyntaxHighlighter>
  </section>
)
