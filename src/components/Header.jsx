import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar bg-primary">
            <div className="container justify-content-between ">
                <NavLink to='/' className="nav-link text-white">Home Page</NavLink>
                <NavLink to='/chisiamo'className="nav-link text-white"> Chi Siamo</NavLink>
                <NavLink to='/products' className="nav-link text-white">Prodotti</NavLink>
            </div>
        </nav>
    )
}

export default Header;