import Img from "../assets/img/Img";
import ItemListContainer from "./ItemListContainer";

const CardWidget = () =>
{
    return(
        <div className="header__Nav--Icon animate__animated animate__slideInDown" >
            <a href=""><img className="header__Nav--Icon__element--person" src={Img[2]} alt="" /></a>
            <ItemListContainer/>
        </div>
    );
}

export default CardWidget;