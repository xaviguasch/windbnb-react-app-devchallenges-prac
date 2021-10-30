import React from 'react'

import Gallery from './components/Gallery'
import Search from './components/Search'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Search />
      <h1 className='title'>Windbnb</h1>
      <Gallery />
    </div>
  )
}

export default App
