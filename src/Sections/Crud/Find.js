import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight as theme } from 'react-syntax-highlighter/styles/prism';

const One = `
Users.find()

// returns entire in a JSON
[{
  name: 'Eliseo',
  age: 34,
  gender: 'M'
}]
`

const Two = `
Users.save({
   name: 'Hernesto',
   age: 31,
   gender: 'M'
})

Users.save({
   name: 'Juana',
   age: 25,
   gender: 'F'
})
`

const Three =`
Users.find()

// returns
[{
  name: 'Eliseo',
  age: 34,
  gender: 'M'
},{
  name: 'Hernesto',
  age: 31,
  gender: 'M'
},{
  name: 'Juana',
  age: 25,
  gender: 'F'
}]
`

const Four = `
Users.find({
  gender: 'M'
})

// returns only users that has gender male
[{
  name: 'Eliseo',
  age: 34,
  gender: 'M'
},{
  name: 'Hernesto',
  age: 31,
  gender: 'M'
}]
`

const Five = `
// find ( conditions )
Users.find({
  gender: 'M',
  age: 31
})

// returns
[{
  name: 'Hernesto',
  age: 31,
  gender: 'M'
}]
`

const Six = `
// find ( conditions, fields )

Users.find({
   gender: 'M'
}, 'name age') // <- separated by spaces

// returns
[{
  name: 'Eliseo',
  age: 34
},{
  name: 'Hernesto',
  age: 31
}]
`

const Seven = `
Users.findOne({
   gender: 'M'
}, 'name age')

// returns
{
  name: 'Eliseo',
  age: 34
}
// IMPORTANT: this method does not
// return an array, is a single object
`

const Eight = `
cats.findSorted('> name')

// returns
[{
   name: 'Destroyer',
   age: 6,
   color: 'brown'
},{
   name: 'Pillow paws',
   age: 6,
   color: 'white'
},{
   name: 'Sparky',
   age: 4,
   color: 'brown'
}]

// symbol < or > define if we want
// order data in ascending or
// descending way. and name represents
// the reference for order data, in
// this example name would be age:
// cats.findSorted('< age') or color
// cats.findSorted('>color')
`

const Find = () => (
  <section>
    <h1>Find</h1>
    <p>
      At the time of reading we have 3 options:
    </p>
    <p className="pd-left-15">
      Get the entire collection.<br />
      Get a part of the collection.<br />
      Get specific nodes from a part of the collection.
    </p>
    <br />
    <div className="separator to-left"></div>
    <br />
    <p>[1] Get the entire collection.</p>
    <p>We can invoke the find method without parameters, on a collection, like this.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { One }
    </SyntaxHighlighter>
    <p>now we will save 2 more items.</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Two }
    </SyntaxHighlighter>
    <p>Find will return an array with 3 objects</p>

    <SyntaxHighlighter language="javascript" style={ theme }>
      { Three }
    </SyntaxHighlighter>

    <div className="separator to-left"></div>
    <br />

    <p>[2] Get a part of the collection.</p>

    <p>We can invoke the find method passing an object as a parameter, this object contains the conditions that the cat (in this case) must fulfill, like this.</p>
    <SyntaxHighlighter language="javascript" style={ theme }>
      { Four }
    </SyntaxHighlighter>

    <p>We can use more than 1 condition.</p>
    <SyntaxHighlighter language="javascript" style={ theme }>
      { Five }
    </SyntaxHighlighter>

    <div className="separator to-left"></div>
    <br />

    <p>[3] Get a part of the collection.</p>
    <p>If we pass as a last parameter a string defining which fields we want to recover, then we will only obtain those fields, like this.</p>
    <SyntaxHighlighter language="javascript" style={ theme }>
      { Six }
    </SyntaxHighlighter>

    <div className="separator to-left"></div>
    <br />

    <p>You can too use findOne method, that returns the first coincidence.</p>
    <SyntaxHighlighter language="javascript" style={ theme }>
      { Seven }
    </SyntaxHighlighter>

    <div className="separator to-left"></div>
    <br />

    <p>Now, it's posible sort result, looks like this.</p>
    <SyntaxHighlighter language="javascript" style={ theme }>
      { Eight }
    </SyntaxHighlighter>
  </section>
)

export default Find
