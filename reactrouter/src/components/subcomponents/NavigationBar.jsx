import React from 'react';
import { NavLink } from 'react-router-dom';


const NavigationBar = () => {
    return (
        <nav >
            <ul className="nav nav-tabs flex gap-10 bg-gray-700 p-4 text-white">
                <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-blue-500' : 'hover:text-blue-400'} text-xl`} to="/" activeClassName="active:text-blue-500">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-blue-500' : 'hover:text-blue-400'} text-xl`} to="/profile" activeClassName="active:text-blue-500">
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-blue-500' : 'hover:text-blue-400'} text-xl`} to="/about" activeClassName="active:text-blue-500">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-blue-500' : 'hover:text-blue-400'} text-xl`} to="/invoice" activeClassName="active:text-blue-500">
                        Invoice
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar
