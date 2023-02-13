import { useState } from "react";
import AsideMenu from "./AsideMenu";
import HeaderContainer from "./HeaderContainer";
import ProductsListContainer from "./ProductListContainer";

const Prg = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
  return (
    <div id="container">
        <HeaderContainer
                allProducts = {allProducts}
                setAllProducts = {setAllProducts}
                totalProducts = {totalProducts}
                setTotalProducts = {setTotalProducts}
                countProducts = {countProducts}
                setCountProducts = {setCountProducts} 
        />
        <ProductsListContainer
                allProducts = {allProducts}
                setAllProducts = {setAllProducts}
                totalProducts = {totalProducts}
                setTotalProducts = {setTotalProducts}
                countProducts = {countProducts}
                setCountProducts = {setCountProducts} 
        />
        <AsideMenu/>
    </div>
  )
}

export default Prg