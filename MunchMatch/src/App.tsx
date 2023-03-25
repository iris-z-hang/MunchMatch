import './App.css'
import image from './tobs.jpg'
import NewPage from "./pages/NewPage"
// import Layout from '/Users/iriszhang/Desktop/2023-BCS-Hackathon/MunchMatch/src/MainMenuComponents/Layout'
import { Button } from 'react-bootstrap'
import { ChakraProvider } from '@chakra-ui/react'
import React from "react";
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import SetupMenu from './setupMenu'
import MainMenu from './mainMenu'
import './App.css'
//import image from './tobs.jpg'

function App() {
  return (
    <div className="App">
      <ChakraProvider><NewPage/></ChakraProvider>
    </div>

  );
  // }

}

export default App
