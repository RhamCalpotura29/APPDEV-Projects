import './index.css'
import Header from './Header'
import Footer from './Footer'
import ListofFruits from './ListofFruits'

function App() {
  //array
  const fruits = [
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Orange", color: "Orange" },
    { id: 4, name: "Grape", color: "Purple" },
    { id: 5, name: "Kiwi", color: "Green" }
  ]

  const deserts =[
    {id: 1, name: "Cake", color: "Red"},
    {id: 2, name: "Ice Cream", color: "Blue"},
    {id: 3, name: "Pie", color: "Green"}
  ]

  return (
    <>
      <Header />

      {/*{fruits.length > 0 && <ListofFruits items={fruits} category="My Favorite Fruits" />}*/}
      {fruits.length > 0 ? (<ListofFruits items={fruits} category="My Favorite Fruits" />) : <p>No Fruits</p>}
      {/*deserts.length > 0 && <ListofFruits items={deserts} category="My Favorite Fruits" />*/}
      {deserts.length > 0 ? (<ListofFruits items={deserts} category="My Favorite Deserts" />) : <p>I do not like Deserts</p>}
      <Footer />
    </>
  )
}

export default App
