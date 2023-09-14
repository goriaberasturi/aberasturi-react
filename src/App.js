import './App.scss';
import { Parallax } from 'react-parallax';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Catalogo/ItemListContainer';
import parallaxBg from './images/parallaxBg.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/NavBar/CartWidget/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Parallax blur={3} bgImage={parallaxBg} bgImageAlt="background" strength={400}>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}></Route>
            <Route exact path='/cart' element={<Cart/>}></Route>
            <Route exact path='/catalogo' element={<ItemListContainer/>}></Route>
          </Routes>
        </Parallax>
      </BrowserRouter>
    </div>
  );
}

export default App;
