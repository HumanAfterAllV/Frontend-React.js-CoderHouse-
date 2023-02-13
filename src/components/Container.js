import AsideMenu from "./AsideMenu";
import HeaderContainer from "./HeaderContainer";
import ProductsContainer from "./ProductsContainer";

const Container = () => {
  return (
    <section id="container">
        <HeaderContainer/>
        <ProductsContainer/>
        <AsideMenu/>
    </section>
  )
}

export default Container