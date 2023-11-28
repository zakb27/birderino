import React, {useRef} from "react";
import '../styles/nav.css'
import {NavLink} from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {IoMdClose} from "react-icons/io";
const AdminNav = () =>{


    const tester = useRef();
    const openMenu = ()=>{
        // tester.current.style.display='block';
        tester.current.style.display='flex'
    }
    const closeMenu = ()=>{
        // tester.current.style.display='block';
        tester.current.style.display='none'
    }

    return(
        <nav className={'navbar'}>
            <NavLink to={'/dash'} activeclassname={'active'} className={'links'}>
                <h1>Birderino Pro</h1>
            </NavLink>
            <RxHamburgerMenu onClick={e=>openMenu()}/>
            <ul ref={tester} role="menu" aria-label="menu">
                <IoMdClose onClick={e=>closeMenu()}/>
                <li role="menuitem">
                    <NavLink to={'/dash'} activeclassname={'active'} className={'links'}>
                        <span className={'dash'}  tabIndex="0">Dashboard</span>
                    </NavLink>
                </li>

                <li role="menuitem">
                    <NavLink to={'/stats'} activeclassname={'active'} className={'links'}>
                        <span className={'stats'}  tabIndex="0">Statistics</span>
                    </NavLink>
                </li>
                <li role="menuitem">
                    <NavLink to={'/flagged'} activeclassname={'active'} className={'links'}>
                        <span className={'flagged'}  tabIndex="0">Flagged tickets</span>
                    </NavLink>
                </li>
                <li role="menuitem">
                    <NavLink to={'/settings'} activeclassname={'active'} className={'links'}>
                        <span className={'settings'} tabIndex="0">Settings</span>
                    </NavLink>
                </li>
                <li role="menuitem">
                    <NavLink to={'/'} activeclassname={'active'} className={'links'}>
                        <span className={'signout'} tabIndex="0">Sign out</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default AdminNav;