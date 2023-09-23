import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Dropdown.scss';
import arrayLotes from '../../../json/lotes.json';

const images = require.context('./../../../images/LoteImgs');
const imageList = images.keys().map(img => images(img));

const Dropdown = () => {

    const [lotes, setLotes] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchLotes = async () => {
            try {
                const data = await new Promise((resolve) => {
                    resolve (arrayLotes);
                })
                setLotes(data);
            } catch(error) {
                console.log('Error: ', error);
            }
        }

        fetchLotes();
    }, [])
    
    lotes.forEach((item, index, array) => {
        array[index].img = imageList[index];
    });

    const cats = [];

    return (
        <div className='Dropdown'>
            {lotes.map((p) => {
                if(!cats.includes(p.categoria)) {
                    cats.push(p.categoria);
                    return (
                        <Link key={p.id} className="navbarLink" to={`/catalogo/category/${p.categoria}`}>
                            {p.categoria}
                        </Link>
                    )
                }
            })}
            <Link className='navbarLink' to={'/catalogo'}>Todos</Link>
        </div>
    )
}

export default Dropdown;