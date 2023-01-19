import CardWidget from "./CardWidget";

const NavBar = (props) => 
{

  const { headerUp, linkFooter, hrefLinkFooter} = props;


  if(headerUp) 
  {
    return(
    <nav className="header__Nav" >
      <div className="header__Nav--tittle animate__animated animate__slideInLeft">
        <a href="">Ink1.0.1Store</a>
      </div>
      <ul className="header__Nav--ul animate__animated animate__slideInDown" >
        <li><a className="header__Nav--ul__element"  href="">Home</a></li>
        <li><a className="header__Nav--ul__element"  href="">Shop</a></li>
        <li><a className="header__Nav--ul__element"  href="">Blog</a></li>
        <li><a className="header__Nav--ul__element"  href="">Contact</a></li>
      </ul>
      <CardWidget/>
    </nav>
    );
  }
  else
  {
    return(
      <nav className="header__Nav">
        <a href={hrefLinkFooter}>{linkFooter}</a>
      </nav>
    );
  }
}

export default NavBar