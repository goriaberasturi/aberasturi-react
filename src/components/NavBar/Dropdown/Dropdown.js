import { Link } from 'react-router-dom';
import './Dropdown.scss';
import arrayLotes from '../../../json/lotes.json';


const Dropdown = () => {

    const cats = [];

    return (
        <div className='Dropdown'>
            {arrayLotes.map((p) => {
                if (!cats.includes(p.categoria)) {
                    cats.push(p.categoria);
                    return (
                        <li key={p.id}>
                            <Link key={p.id} className="navbarLink" to={`/catalogo/category/${p.categoria}`}>
                                {p.categoria}
                            </Link>
                        </li>
                    )
                }
            })}
            <li><Link className='navbarLink' to={'/catalogo'}>Todos</Link></li>
        </div>
    )
}

export default Dropdown;