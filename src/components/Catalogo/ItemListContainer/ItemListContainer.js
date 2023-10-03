import { useState, useEffect } from 'react';
import Lote from './../Lote/Lote.js';
import './ItemListContainer.scss';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';


const ItemListContainer = () => {

    const [lotes, setLotes] = useState([]);
    const { cat } = useParams();

    useEffect(() => {
        const queryDB = getFirestore();
        const queryCollection = collection(queryDB, 'lotes');
        if (cat) {
            const queryFilter = query(queryCollection, where('categoryId', '==', cat));
            getDocs(queryFilter)
                .then((res) => setLotes(
                    res.docs.map((p) => (
                        { id: p.id, ...p.data() }
                    )
                    )
                )
                );
        } else {
            getDocs(queryCollection)
                .then((res) => setLotes(
                    res.docs.map((p) => (
                        { id: p.id, ...p.data() }
                    )
                    )
                )
                );
        }
    }, [cat]);

    return (
        <div className='itemListContainer'>
            <h1>NUESTRO CATALOGO DE LOTES</h1>
            <div className='catalogo'>
                {lotes.map((p) => {
                    return (
                        <Link key={p.id} className='ItemLink' to={`/catalogo/item/${p.id}`}>
                            <Lote
                                img={p.img}
                                cabezas={p.cabezas}
                                categoria={p.categoria}
                                raza={p.raza}
                                peso={p.peso}
                                ubicacion={p.ubicacion}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ItemListContainer;