import { useContext, useState } from "react";
import { Navbar } from "./style";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

function NavBar() {

    const auth = useContext(AuthContext);
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setTogglenIcon] = useState("nav__toggler")

    const navToggle = () => {
        active === 'nav__menu' 
            ? setActive('nav__menu nav__active') 
            : setActive('nav__menu');

        toggleIcon === 'nav__toggler'
            ? setTogglenIcon('nav__toggler toggle')
            : setTogglenIcon('nav__toggler');
    }

    const handleLogout = async () => {
        await auth.signout();
        // navigate('/')
      }

    return (
        <Navbar>
            <a href="#" className="nav__brand">Deyvison</a>
            
            <ul className={active}>
                <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                
                <li className="nav__item"><Link to="/private" className="nav__link">Página Privada</Link></li>
                <li className="nav__item"><Link to="#" className="nav__link">Skills</Link></li>
                <li className="nav__item"><Link to="#" className="nav__link">Portfolio</Link></li>
                <li className="nav__item"><Link to="#" className="nav__link">About</Link></li>
                <li className="nav__item"><Link to="/login" className="nav__link">Login</Link></li>
            </ul>

            {auth.user && <Link to="/" onClick={handleLogout} className="nav__brand">Logout 😀</Link>}

            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </Navbar>
    )
}

export default NavBar;