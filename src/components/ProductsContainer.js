import { Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import ProductsUserShop from './ProductsUserShop';

const ProductsContainer = () => {
	return (
    <main id='sectionMain'>
		<Routes>
			<Route path='/' element={<ProductList/>}/>
			<Route path='/products/:productId' element={<ProductDetails/>}/>
			<Route path='/products/shopping' element={<ProductsUserShop/>}/>
		</Routes>
    </main>
	);
};
export default ProductsContainer