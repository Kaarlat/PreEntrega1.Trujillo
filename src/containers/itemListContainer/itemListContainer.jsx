// Greeting y css desde navbar.css
import '../../components/navbar/navbar.css';

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="greeting">
            <h1>{greeting}</h1>
        </div>
    )
}