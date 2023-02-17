import { Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import ItemCheckout from './ItemCheckout';
import Contact from './Contact';

const ItemListContainer = () => {
	return (
    <main id='sectionMain'>
		<Routes>
			<Route path='/' element={<ItemList/>}/>
			<Route path='/products/:productId' element={<ItemDetails/>}/>
			<Route path='/products/checkout' element={<ItemCheckout/>}/>
			<Route path='/contact' element={<Contact/>}/>
		</Routes>
    </main>
	);
};
export default ItemListContainer