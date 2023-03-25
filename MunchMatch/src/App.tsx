import React from "react";
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import SetupMenu from './setupMenu'
import MainMenu from './mainMenu'
import './App.css'
//import image from './tobs.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      {/* <img src={image} className="logo" alt="" /> */}
      <SetupMenu />
    </div>
  ) ;
}

export default App
