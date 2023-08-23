import brand from "../img/logo.png";
import { Link} from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Tienda de decoración para el hogar" title="Tienda de decoración para el hogar"></img>
        </Link>
    )
}

export default Brand;