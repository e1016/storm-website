import React from 'react'

import Button from '../../Components/Button'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const codeString = `
<!-- Linking library -->
<script src="https://unpkg.com/storm-orm@1.3.0/dist/storm.js"></script>

<!-- or import -->
<script>
  import Collection from 'storm-orm'
</script>

<script>
  // Create a collection
  const Users = new Collection('@usersReference')

  if (Users.exists()) {         // Check if exists data
    console.log(Users.find())   // Show saved data
  } else {                      // or
    Users.save({                // Save new data
      name: 'Eliseo',
      age: 23,
      gender: 'M'
    })
  }
</script>
`

const Home = () => (
  <section className="main--info-section">
    <img src="https://i.imgur.com/H2ohkEI.png" width="230" alt="Storm logo"/>

    <div className="separator to-left"></div>

    <h1 className="hidden">Storm</h1>
    <br />
    <br />
    <p>
      Storm provides a fast and simple way to manage storage in web browsers, becoming an intermediary between localStorage and the dev, in a simple CRUD; <b>save</b> , <b>find</b> , <b>update</b>  and <b>erase</b> , perfect to integrate with Vue, React, o simple Vanilla JavaScript.
      <br />
      <br />
      <code>
        npm install --save storm-orm
      </code>
    </p>
    <br />
    <Button href="https://github.com/e1016/storm">fork on GitHub</Button>
    <Button href="https://unpkg.com/storm-orm@1.3.0/dist/storm.js">download</Button>
    <br />
    <br />
    <div className="separator to-left"></div>
    <br />

    <p>Quick start guide</p>

    <SyntaxHighlighter language="html" style={ theme }>
      { codeString }
    </SyntaxHighlighter>

    <p>
      <small>contribute to <a href="https://github.com/e1016/storm-website" target="_blank" rel="noopener noreferrer">this page on GitHub</a></small>
    </p>

  </section>
)

export default Home
