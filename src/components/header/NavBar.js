import Brand from "./Brand";
import ItemListContainer from "../itemsListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer 
                    itemUno = "Lamparas"
                    itemDos = "Sillones"
                    itemTres = "Alfombras"
                    itemCuatro = "Deco"
                />
            </nav>

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;