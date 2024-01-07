import { NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return (
    <nav className='nav navbar navbar-expand-lg py-3 justify-content-center bg-main'>
        <NavLink className='nav-link' aria-current='page' to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/resume'>Resume</NavLink>
        <NavLink className='nav-link' to='/blogs'>Blogs</NavLink>
        <NavLink className='nav-link' to='/fun-things'>Fun Things</NavLink>
    </nav>
    );
}

export default Navbar;