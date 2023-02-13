import { Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

const ProductsContainer = () => {
	return (
    <main id='sectionMain'>
		<Routes>
			<Route path='/' element={<ProductList/>}/>
			<Route path='/products/:productId' element={<ProductDetails/>}/>
		</Routes>
    </main>
	);
};
export default ProductsContainer