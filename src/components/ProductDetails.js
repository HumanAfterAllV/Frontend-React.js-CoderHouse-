import { useParams } from 'react-router-dom';
import data from '../products/data';

const ProductDetails = ({onAddProduct}) => {
  const {productId} = useParams();
  const product = data.find(product => product.id === parseInt(productId));
  return (
    <section className='secSingleProduct'>
      <article className='secSingleArticle'>
        <figure className='secSingleArticle__fig'>
          <img src={product.img} alt={product.title}/>
        </figure>
        <div className='secSingleArticle__details'>
          <h1>{product.title}</h1>
          <p>Size {product.size} <span className='price'>Price: ${product.price}</span></p>
          <p>{product.descriptions}</p>
          <button aria-label="<%= word %>" className="article__btn--add centered" data-text="Add" onClick={() => onAddProduct(product)}>
            <span>Added</span>
          </button>
        </div>
      </article>
    </section>
  )
}

export default ProductDetails