import './App.css'
import NavBar from './componentes/NavBar.jsx/NavBar'
import CartWidget from './componentes/CartWidget/CartWidget'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import ItemCount from './componentes/ItemCount.jsx/ItemCount'

function App() {


  return (
    <>

<NavBar />

      <ItemListConteiner greeting={"Bienvenidos a mi shop de productos"} />
      <CartWidget />
      <ItemCount/>


     




    </>



  )
}

export default App
