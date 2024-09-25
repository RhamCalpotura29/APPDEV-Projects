import { useState } from 'react'
import './index.css'
import Header from './Header'
import Footer from './Footer'
import ColorPicker from './ColorPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ColorPicker/>
      <Footer/>
    </>
  )
}

export default App
