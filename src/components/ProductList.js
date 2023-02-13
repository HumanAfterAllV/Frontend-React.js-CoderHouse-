import { Link } from 'react-router-dom';
import data from '../products/data'

const ProductList = ({onAddProduct}) => {
  return (
    <section className='secProducts'>
      {data && data.map(product => (
			  <article className='secProducts__article' key={product.id}>
				  <figure>
            <Link to={`/products/${product.id}`}><img src={product.img} alt={product.title} /></Link>
				  </figure>
				  <div className='secProducts__article--info'>
					  <h3>{product.title}</h3>
            <p>Size {product.size} <span className='price'>Price: ${product.price}</span></p>
            <p>{product.descriptions}</p>
            <button aria-label="<%= word %>" className="article__btn--add centered" data-text="Add" onClick={() => onAddProduct(product)}>
              <span>Added</span>
            </button>
				  </div>
			  </article>
		  ))}
    </section>
  )
}

export default ProductList