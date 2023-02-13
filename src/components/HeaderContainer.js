import { Link } from "react-router-dom";
import HeaderCartWidget from "./HeaderCartWidget";

const HeaderContainer = () => {
	return (
		<header id="header">
      		<div>				
      		</div>
      		<div className="header__title animate__animated animate__slideInDown">
				<Link to={"/"}>InkV1.0.1</Link>
      		</div>
			<HeaderCartWidget/>
		</header>
	);
};

export default HeaderContainer