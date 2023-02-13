import { Routes,Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

const ProductsListContainer = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	totalProducts,
	setTotalProducts,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotalProducts(totalProducts + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotalProducts(totalProducts + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
    <main id='sectionMain'>
		<Routes>
			<Route path='/' element={<ProductList onAddProduct={onAddProduct}/>}/>
			<Route path='/products/:productId' element={<ProductDetails onAddProduct={onAddProduct}/>}/>
		</Routes>
    </main>
	);
};
export default ProductsListContainer