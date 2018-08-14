import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const One = `Users.erase()`

export default () => (
  <section className="main--info-section">

    <h1>Erase</h1>
    <p>This method is so mush simple, delete all data from store.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { One }
    </SyntaxHighlighter>

  </section>

)
