// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const Box = ({style, size, children}) => {
  return (
    <div className={`box ${size}`} style={style}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="">
      <Box
        size="box--small"
        style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
        children="small lightblue box"
      />
      <Box
        size="box--medium"
        style={{fontStyle: 'italic', backgroundColor: 'pink'}}
        children="medium pink box"
      />
      <Box
        size="box--large"
        style={{fontStyle: 'italic', backgroundColor: 'orange'}}
        children="large orange box"
      />
      <Box className="box" children="size-less box" />
    </div>
  )
}

export default App
