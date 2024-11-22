import { useState } from 'react'
import './index.css'
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games'
import NotFound from './components/NotFound'
import Game from './components/Game'
import {Link, Route, Router, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <h1>This is my React Page</h1>
    <nav>
      <ul>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/about'>About</Link></li>
        <li><Link to = '/games'>Games</Link></li>
        
      </ul>
    </nav>

    {/* Routes for Application  */}
    <Routes>
    <Route path = "/" element ={<Home/>} />
    <Route path = "/about" element ={<About/>} />

    <Route path="/games" element={<Games />} />
    <Route path="/games/:gameId" element={<Game />} />

    <Route path = "*" element = {<NotFound />} />
    </Routes>
    </>
  )
}

export default App
