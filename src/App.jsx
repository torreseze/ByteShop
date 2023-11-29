
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemGrid from './components/category/CategoryGrid'
import DetailView from './components/category/DetailView'
import HomeGrid from './layouts/HomePage'
import { CartProvider } from './context/CartContext'
import Footer from './layouts/Footer'

function App() {
{/* <div style={{marginRight:'500px', height:'500px', marginTop:'250PX', color:"#000"}}>Detalle</div> */}
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeGrid />} />
        <Route path='/category/:idCategory' element={<ItemGrid />}/>
        <Route path='detail/:idProduct' element={
              <DetailView />
          }/>
        <Route path='/cart' element={<div>CARRITO</div>} />
        <Route path='*' element={<div style={{background:'#f2b'}}>NOT FOUND 404</div>} />
      </Routes>
      {/*TODO FOOTER*/}
      <Footer />
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
