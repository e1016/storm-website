import React from 'react'

import Button from '../Components/Button'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const codeString = `
<!-- Linking library -->
<script src="https://cdnjs.com/storm.js"></script>

<script>
  // Create a collection
  const Users = new Collection('@usersReference')

  if ( !Users.exists() ) {      // Check if exists data
    console.log( Users.find() ) // Show saved data
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
    <img src="https://i.imgur.com/H2ohkEI.png" width="230"/>
    
    <div className="separator to-left"></div>

    <h1 className="hidden">Storm</h1>
    <br />
    <br />
    <p>
      Storm provides a fast and simple way to manage storage in web browsers, becoming an intermediary between localStorage and the dev, in a simple CRUD... Save, Find, Update and Erase, perfect to integrate with Vue, React, o simple Vanilla JavaScript.
      <br />
      <br />
      <code>
        npm install --save storm-orm
      </code>
    </p>
    <br />
    <Button text="fork on GitHub"/>
    <Button text="download"/>
    <Button text="Link from cdnjs"/>
    <br />
    <br />
    <div className="separator to-left"></div>
    <br />

    <p>Quick start guide</p>

    <SyntaxHighlighter language='html' style={ theme }>
      { codeString }
    </SyntaxHighlighter>

    <p>
      <small>Helps to mantain this page on GitHub, fix bug or errors</small>
    </p>

  </section>
)

export default Home
