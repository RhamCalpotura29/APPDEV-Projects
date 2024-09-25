import { useState } from 'react'
import './index.css'
import Header from './Header'
import Footer from './Footer'
import Counter from './Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Counter/>
      <Footer/>
    </>
  )
}

export default App
