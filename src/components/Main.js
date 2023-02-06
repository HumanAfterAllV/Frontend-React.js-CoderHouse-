import {data} from '../products/data';

const Main = ({
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
    <main id='main'>
			{data && data.map(product => (
				<article className='main__article' key={product.id}>
					<figure>
						<img src={product.img} alt={product.title} />
					</figure>
					<div className='main__article--info'>
						<h3>{product.title}</h3>
            <p>Size {product.size} <span className='price'>Price: ${product.price}</span></p>
            <p>{product.descriptions}</p>
            <button aria-label="<%= word %>" class="article__btn--add centered" data-text="Add" onClick={() => onAddProduct(product)}>
              <span>Added</span>
            </button>
					</div>
				</article>
			))}
    </main>
	);
};
export default Main