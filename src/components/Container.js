import CartWidgetContainer from "./CartWidgetContainer";
import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";

const Container = () => {
  return (
    <section id="container">
        <CartWidgetContainer/>
        <ItemListContainer/>
        <NavBar/>
    </section>
  )
}

export default Container