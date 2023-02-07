import { useState } from "react";
import ItemListContainer from "./ItemListContainer";
import Main from "./Main";
import Side from "./Side";

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <div id="container">
      <ItemListContainer
        allProducts = {allProducts}
        setAllProducts = {setAllProducts}
        totalProducts = {totalProducts}
        setTotalProducts = {setTotalProducts}
        countProducts = {countProducts}
        setCountProducts = {setCountProducts} 
      />
      <Main
        allProducts = {allProducts}
        setAllProducts = {setAllProducts}
        totalProducts = {totalProducts}
        setTotalProducts = {setTotalProducts}
        countProducts = {countProducts}
        setCountProducts = {setCountProducts} 
      />
      <Side/>
    </div>
  )
}

export default App



