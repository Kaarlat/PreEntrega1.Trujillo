import { Link } from 'react-router-dom';

export const Item = ({ id, category, description, img, name, price }) => {
    return (
        <div className='card'>
            <div>{category}</div>
            <img src={img} alt={name} />
            <div>{name}</div>
            <div>{price}</div>
            <Link to={`/item/${id}`} className='btn-card'>Información</Link>
        </div>
    )
}
