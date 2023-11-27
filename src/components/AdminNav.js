import React from "react";
import '../styles/nav.css'
import {NavLink} from "react-router-dom";

const AdminNav = () =>{


    return(
        <nav className={'navbar'}>
            <NavLink to={'/dash'} activeclassname={'active'} className={'links'}>
                <h1>Birderino Pro</h1>
            </NavLink>
            <ul>
                <li>
                    <NavLink to={'/dash'} activeclassname={'active'} className={'links'}>
                        <span className={'dash'}>Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/stats'} activeclassname={'active'} className={'links'}>
                        <span className={'stats'}>Statistics</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/flagged'} activeclassname={'active'} className={'links'}>
                        <span className={'flagged'}>Flagged tickets</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} activeclassname={'active'} className={'links'}>
                        <span className={'signout'}>Sign out</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default AdminNav;