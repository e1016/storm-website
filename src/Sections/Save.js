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
  <div>
    <SyntaxHighlighter language='javascript'>{codeString}</SyntaxHighlighter>;
  </div>
)

export default Find
