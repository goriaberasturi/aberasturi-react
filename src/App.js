import './App.scss';
import { Parallax } from 'react-parallax';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Catalogo/ItemListContainer';
import parallaxBg from './images/parallaxBg.jpg'

function App() {
  return (
    <div className="App">
      <Parallax blur={3} bgImage={parallaxBg} bgImageAlt="background" strength={400}>
        <NavBar/>
        <ItemListContainer/>
      </Parallax>
    </div>
  );
}

export default App;
