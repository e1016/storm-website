import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

const code = `
const Users = new Collection('referenceOnStore', {
  storeOnSession: true
})
`

const Find = () => (
  <section>
    <p>
      The average storage of localStorage of approximately 5 megabytes, do not abuse the library and use it as if it were a database, Storm was conceived with the idea of ​​creating a quick and easy way to manage temporary storage,Storm is just a way to keep the state of the application stored for a temporal time, after all, it works with Java Script's localStorage technology.
      <br />
      To enable storage support in the session, a second argument must be passed to the collection constructo\r.
    </p>
    <SyntaxHighlighter language='javascript' style={ base16AteliersulphurpoolLight }>{code}</SyntaxHighlighter>
  </section>
)

export default Find
