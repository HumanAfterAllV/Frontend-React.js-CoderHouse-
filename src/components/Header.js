import NavBar from "./NavBar";

const Header = () => 
{
    const headerUp = true;
    return (
        <header className="header">
            <NavBar headerUp={true}/>
        </header>
    )
};

export default Header;