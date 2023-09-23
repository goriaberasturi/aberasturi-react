import './App.scss';
import { Parallax } from 'react-parallax';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Catalogo/ItemListContainer/ItemListContainer';
import parallaxBg from './images/parallaxBg.jpg';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/Catalogo/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <HashRouter>
        <NavBar/>
        <Parallax blur={3} bgImage={parallaxBg} bgImageAlt="background" strength={400}>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}></Route>
            <Route exact path='/cart' element={<Cart/>}></Route>
            <Route exact path='/catalogo' element={<ItemListContainer/>}></Route>
            <Route exact path='/catalogo/category/:cat' element={<ItemListContainer/>}></Route>
            <Route exact path='/catalogo/item/:itemId' element={<ItemDetailContainer/>}></Route>
          </Routes>
        </Parallax>
      </HashRouter>
    </div>
  );
}

export default App;
