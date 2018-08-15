import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const One = `
import Collection from 'storm-react-native'

const Users = new Collection('@users:store')
const OtherStore = new Collection('@other:store')

export {
  Users,
  OtherStore
}
`

const RNStorage = () => (
  <section className="main--info-section">

    <h1>AsyncStorage</h1>

    <p>
      Storm for React Native (in diference to <a href="/">web versión</a>) use AsyncStorage, this has a particular property, as the name says: it is Asynchronous.
    </p>
    <br />

    <p>
      This is the reason because this version use Promises, it is not the substitute for a database, Storm is designed to help in the structuring of temporal data. It is not recommended to save files with encode in base64.
    </p>

  </section>
)

export default RNStorage
