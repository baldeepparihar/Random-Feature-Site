import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/random-feature-site.png';

function Navbar() {

    return (
        <div className="Navbar">
                <div className="Navbar__Image--Container">
                    <img className="Navbar__Image" src={Logo} alt="" />
                </div>
                <div className="Navbar__Link--Container">
                    <NavLink to="/" activeClassName="Selected" className="Navbar__Links">Home</NavLink>
                    <NavLink to="/TableSearch" activeClassName="Selected" className="Navbar__Links">Coffee Table Search</NavLink>
                    <NavLink to="/TaskList" activeClassName="Selected" className="Navbar__Links">Task List</NavLink>
                </div>
        </div>
    )

}

export default Navbar;
