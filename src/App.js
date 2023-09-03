import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Catalogo/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos al e-commerce de Gregorio Aberasturi SRL"/>
    </div>
  );
}

export default App;
