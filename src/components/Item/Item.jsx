import './Item.css'

export const Item = ({ id, category, description, img, name, price }) => {
    return (
        <>
            <div className='card'>
                <div>{category}</div>
                <img src={img} alt={name} />
                <div>{name}</div>
                <div>{price}</div>
                <button className='btn-card'>Información</button>
            </div>
        </>
    )
}