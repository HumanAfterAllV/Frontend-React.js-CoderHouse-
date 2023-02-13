import { createContext, useState, } from "react"


export const contexto = createContext();
const Provider = contexto.Provider

const CustomProvider = ({ children }) => {
  
//useState control
    const [allProducts, setAllProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

//Delete products
    const onDeleteProduct = product =>
    {
		  const results = allProducts.filter(item => item.id !== product.id);

		  setTotalProducts(totalProducts - product.price * product.quantity);
		  setCountProducts(countProducts - product.quantity);
		  setAllProducts(results);
	  };

//Add products
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

    const valueContext = {
        allProducts: allProducts,
        setAllProducts: setAllProducts,
        totalProducts: totalProducts,
        setTotalProducts: setTotalProducts,
        countProducts: countProducts,
        setCountProducts: setCountProducts,
        onDeleteProduct: onDeleteProduct,
        onAddProduct: onAddProduct
    }
  return (
    <Provider value={valueContext}>
        {children}
    </Provider>
  )
}

export default CustomProvider