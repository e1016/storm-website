import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

class Code extends Component {
  render () {
    console.log(base16AteliersulphurpoolLight);
    return (
      <SyntaxHighlighter language="javascript" style={ base16AteliersulphurpoolLight }>
        { this.props.children }
      </SyntaxHighlighter>
    )
  }
}

export default Code
