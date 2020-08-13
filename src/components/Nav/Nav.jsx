import React from 'react';
import "./Nav.scss";
import routes from '../Router/routes';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'

export default function Nav(props) {
    return (
        <div className="NavGrid">
        <Link to={"/"}><img src={Logo} alt="logo"/></Link>
        <nav>
            <ul>
                <li><NavLink to={routes[0].path} >{routes[0].name}</NavLink></li> <span>|</span>
                <li><NavLink to={routes[1].path} >{routes[1].name}</NavLink></li> <span>|</span>
                <li><NavLink to={routes[2].path} >{routes[2].name}</NavLink></li> <span>|</span>
                <li><NavLink to={routes[3].path} >{routes[3].name}</NavLink></li> <span>|</span>
                <li><NavLink to={routes[4].path} >{routes[4].name}</NavLink></li>
            </ul>
        </nav>
        </div>
    );
}