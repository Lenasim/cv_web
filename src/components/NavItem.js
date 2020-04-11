import React from 'react';
import { Link } from 'react-scroll'

export default function NavItem(props) {
    return (
        <li className="nav-item">
            <Link 
                activeClass="active" 
                className="nav-link" 
                to={props.to} 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500}>
                {props.title}
            </Link>
        </li>
    )
}