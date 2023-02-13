import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderCartWidget from "./HeaderCartWidget";

const HeaderContainer = ({
	allProducts,
	setAllProducts,
	totalProducts,
	countProducts,
	setCountProducts,
	setTotalProducts
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => 
  {
		const results = allProducts.filter(item => item.id !== product.id);

		setTotalProducts(totalProducts - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => 
  {
		setAllProducts([]);
		setTotalProducts(0);
		setCountProducts(0);
	};

	return (
		<header id="header">
      		<div>
				
      		</div>
      		<div className="header__title animate__animated animate__slideInDown">
				<Link to={"/"}>InkV1.0.1</Link>
      		</div>
			<HeaderCartWidget 
				onCleanCart={onCleanCart} 
				onDeleteProduct={onDeleteProduct} 
				setActive={setActive} 
				active={active} 
				countProducts={countProducts}
				totalProducts={totalProducts}
				allProducts={allProducts}
			/>
		</header>
	);
};

export default HeaderContainer