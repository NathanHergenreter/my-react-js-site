import { NavLink } from "react-router-dom";

import './Navbar.css';

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg py-3">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/fun-things">Fun Things</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;