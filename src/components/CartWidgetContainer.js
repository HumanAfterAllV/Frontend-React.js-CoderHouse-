import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const CartWidgetContainer = () => {
	return (
		<header id="header">
      		<div>				
      		</div>
      		<div className="header__title animate__animated animate__slideInDown">
				<Link to={"/"}>InkV1.0.1</Link>
      		</div>
			<CartWidget/>
		</header>
	);
};

export default CartWidgetContainer