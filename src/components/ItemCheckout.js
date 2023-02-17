import { useContext} from 'react'
import {contexto} from './CustomProvider'

const ItemCheckout = () => {
    const valueContext = useContext(contexto)
	const { allProducts, totalProducts, onDeleteProduct, onCleanCart 
	} = valueContext


  return (
<section className='section-shop-products'>
    <div className='container-shop-products'>
    {allProducts.length ? (
        <>
            <div className='row-product'>
                {allProducts && allProducts.map(product => (
                    <div className='cart-product' key={product.id}>
                        <div className='info-cart-product'>
                            <span className='cantidad-producto-carrito'>
                                {product.stock}
                            </span>
                            <p className='titulo-producto-carrito'>
                                {product.title}
                            </p>
                            <span className='precio-producto-carrito'>
                                ${product.price}
                            </span>
                        </div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='icon-close'
                            onClick={() => onDeleteProduct(product)}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </div>
                ))}
            </div>
            <div className='cart-total-container'>
                <div className='cart-total'>
                    <h3>Total:</h3>
                    <span className='total-pagar'>${totalProducts}</span>
                </div>
                <button className='btn-shop-all' >
				    Shopping
			    </button>

                <button className='btn-clear-all' onClick={onCleanCart}>
                    Delete
                </button>
            </div>
            
        </>
    ) : (
        <p className='cart-empty-shop'>Empty cart</p>
    )}
    </div>
</section>
  )
}

export default ItemCheckout