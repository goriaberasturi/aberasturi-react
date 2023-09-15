import './App.scss';
import { useState } from 'react';
import { Parallax } from 'react-parallax';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Catalogo/ItemListContainer';
import parallaxBg from './images/parallaxBg.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/NavBar/CartWidget/Cart';
import ItemDetailContainer from './components/Catalogo/ItemDetailContainer';

function App() {

  const [items, setItems] = useState([
    {
        id: 14260,
        img: '',
        cabezas: 14,
        categoria: 'Terneros / Terneras',
        raza: 'Aberdeen Angus y Cruza Británicos',
        peso: 140,
        ubicacion: 'Rivera, Buenos Aires',
    },
    {
        id: 14261,
        img: '',
        cabezas: 164,
        categoria: 'Terneros / Terneras',
        raza: 'Aberdeen Angus y Cruza Británicos',
        peso: 180,
        ubicacion: 'Castelli, Buenos Aires',
    },
    {
        id: 14262,
        img: '',
        cabezas: 90,
        categoria: 'Terneros',
        raza: 'Aberdeen Angus Negros',
        peso: 200,
        ubicacion: 'Darregueira, Buenos Aires',
    },
    {
        id: 14263,
        img: '',
        cabezas: 60,
        categoria: 'Terneras',
        raza: 'Aberdeen Angus Negros y Colorados',
        peso: 360,
        ubicacion: 'Cnel. Dorrego, Buenos Aires',
    },
    {
        id: 14264,
        img: '',
        cabezas: 120,
        categoria: 'Novillitos',
        raza: 'Aberdeen Angus Negros y Colorados',
        peso: 390,
        ubicacion: 'Arroyo Venado, Buenos Aires',
    },
    {
        id: 14265,
        img: '',
        cabezas: 35,
        categoria: 'Vaquillonas',
        raza: 'Aberdeen Angus Negros',
        peso: 310,
        ubicacion: 'Santa Teresa, La Pampa',
    },
]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Parallax blur={3} bgImage={parallaxBg} bgImageAlt="background" strength={400}>
          <Routes>
            <Route exact path='/' element={<ItemListContainer />}></Route>
            <Route exact path='/cart' element={<Cart />}></Route>
            <Route exact path='/catalogo' element={<ItemListContainer items={items}/>}></Route>
            <Route exact path='/catalogo/:itemId' element={<ItemDetailContainer items={items}/>}></Route>
          </Routes>
        </Parallax>
      </BrowserRouter>
    </div>
  );
}

export default App;
