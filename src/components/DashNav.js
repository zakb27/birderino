import React from "react";
import '../styles/nav.css'
import {NavLink} from "react-router-dom";
const DashNav = () =>{


    return(
        <nav className={'navbar'}>
            <NavLink to={'/'} className={'links'}>
                <h1>Birderino</h1>
            </NavLink>
            <ul>
                <li>
                    <NavLink to={'/signin'} activeclassname={'active'} className={'links'}>
                        <span className={'sign'}>Sign in</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/register'} activeclassname={'active'} className={'links'}>
                        <span className={'register'}>Register</span>
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default DashNav;