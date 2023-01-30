import CardWidget from "./CardWidget";

const NavBar = () => 
{
  return(
    <nav className="header__Nav" >
      <div>

      </div>
      <div className="header__Nav--title animate__animated animate__slideInUp">
        <a  href="">Ink.V.01</a>
      </div>
      <CardWidget/>
    </nav>
    );
  }

export default NavBar

