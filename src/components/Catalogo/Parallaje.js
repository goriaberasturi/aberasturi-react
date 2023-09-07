import { Parallax } from 'react-parallax';
import ItemListContainer from './ItemListContainer';
import BgParalaje from './../../images/7a89e72fb98676621a315c148adce7ed.jpg'
import NavBar from '../NavBar/NavBar';
import './Parallaje.scss'


const Parallaje = () => (
    <Parallax blur={3} bgImage={BgParalaje} bgImageAlt="the cat" strength={900}>
        <NavBar/>
        <ItemListContainer/>
    </Parallax>
);

export default Parallaje;