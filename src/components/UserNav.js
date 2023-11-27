import React from "react";
import '../styles/nav.css'
import {NavLink} from "react-router-dom";

const UserNav = () =>{


    return(
        <nav className={'navbar'}>
            <NavLink to={'/dash'} activeclassname={'active'} className={'links'}>
                <h1>Birderino Standard</h1>
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
                    <NavLink to={'/submit'} activeclassname={'active'} className={'links'}>
                        <span className={'submit'}>Submit results</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/settings'} activeclassname={'active'} className={'links'}>
                        <span className={'settings'}>Settings</span>
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

export default UserNav;