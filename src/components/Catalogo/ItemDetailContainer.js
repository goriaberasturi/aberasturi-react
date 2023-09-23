import {useState, useEffect} from 'react';
import './ItemDetailContainer.scss';
import { useParams } from 'react-router-dom';
import arrayLotes from '../../json/lotes.json';

const images = require.context('./../../images/LoteImgs');
const imageList = images.keys().map(imag => images(imag));

const ItemDetailContainer = () => {
    
    const [lotes, setLotes] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        const fetchLotes = async () => {

            try {

                const data = await new Promise((resolve) => {
                    resolve(arrayLotes);
                })
                setLotes(data)

            } catch(error) {
                console.log('Error: ', error);
            }
        }
        
        fetchLotes();
    }, []);
    
    const item = [];
    
    lotes.forEach((item, index, array) => {
        array[index].img = imageList[index];
    });

    console.log(lotes)

    return (
        <div className='ItemDetailContainer'>
            <div className='ItemDetail'>
                {/* <img src={item.img} alt='cardImg'/>
                <div className='lote-div categoria'>{item.categoria}</div>
                <div className='lote-div raza'>{item.raza}</div>
                <div className='lote-div cabezas'><span>Cabezas: </span>{item.cabezas}</div>
                <div className='lote-div peso'><span>Peso: </span>{item.peso}</div>
                <div className='lote-div ubicacion'><span>Localidad: </span>{item.ubicacion}</div> */}
            </div>
        </div>
    )
}

export default ItemDetailContainer;