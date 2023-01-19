import { useState } from "react";
import Img from "../assets/img/Img";

const ItemListContainer = () => {
  const [contador, setContador] = useState(0) 

  return (
      <div className="bagCounter">
        <p>{contador}</p>
        <img className="header__Nav--Icon__element--bag" src={Img[0]} alt=""/>
        <button className="bagCounter-button" onClick={() => setContador(contador+1)}>Add</button>
      </div>
  )
}

export default ItemListContainer