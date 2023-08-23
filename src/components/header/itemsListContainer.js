import { Link } from "react-router-dom"


const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="categoty/Lamparas">
                    {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/Sillones">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/Alfombras">
                    {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="category/Deco">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;