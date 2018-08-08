import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';

const codeString = `const app = new Collection()

(function (root, factory) {
  this.root = factory()
})(this, function () {
  const App = {}
  return App
})
`

const Find = () => (
  <section>
    <p>for save data (assuming we use the users collection) you just need to use the `save` method of users and pass a JSON as argument with "the user information" and don't need to have a static schema.</p>
    <SyntaxHighlighter language='javascript'>{codeString}</SyntaxHighlighter>;
  </section>
)

export default Find
