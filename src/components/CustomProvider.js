import { createContext, useState, } from "react"


const context = createContext();
const Provider = context.Provider

const CustomProvider = ({children}) => {
    const [allProducts, setAllProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    const valueContext = {
        allProducts: allProducts,
        setAllProducts: setAllProducts,
        totalProducts: totalProducts,
        setTotalProducts: setTotalProducts,
        countProducts: countProducts,
        setCountProducts: setCountProducts
    }
  return (
    <Provider value={valueContext}>
        {children}
    </Provider>
  )
}

export default CustomProvider