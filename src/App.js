import './App.scss';
import { Parallax } from 'react-parallax';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Catalogo/ItemListContainer/ItemListContainer';
import parallaxBg from './images/parallaxBg.jpg';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/Catalogo/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout'
import Error404 from './components/Errors/Error404';
import CartContext from './Context/CartContext';


function App() {

  return (
    <div className="App">
      <CartContext>
        <HashRouter>
          <NavBar />
          <Parallax blur={3} bgImage={parallaxBg} bgImageAlt="background" strength={400}>
            <Routes>
              <Route exact path='/' element={<ItemListContainer/>}></Route>
              <Route exact path='/cart' element={<Cart/>}></Route>
              <Route exact path='/catalogo' element={<ItemListContainer/>}></Route>
              <Route exact path='/catalogo/categoria/:cat' element={<ItemListContainer/>}></Route>
              <Route exact path='/catalogo/categoria/:catId/:itemId' element={<ItemDetailContainer/>}></Route>
              <Route exact path='/checkout' element={<Checkout/>}></Route>
              <Route path='/*' element={<Error404/>}></Route>
            </Routes>
          </Parallax>
        </HashRouter>
      </CartContext>
    </div>
  );
}

export default App;
