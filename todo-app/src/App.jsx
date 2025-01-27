import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Todo from "./components/Todo"
import Card from "./components/Card"
import Button from './components/Button.jsx'
import InlineComponent from './components/InlineComponent.jsx'
import Header from './components/Header.jsx'
import './App.css'


function App() {
  

  return (
    <div className="App">
    <Header/>
    <Todo/>
    
    </div>
  )
}

export default App
