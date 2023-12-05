import React, {useRef} from "react";
import '../styles/nav.css'
import {NavLink} from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {IoMdClose} from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";

const AdminNav = () =>{


    const tester = useRef();


    const openMenu = ()=>{
        // tester.current.style.display='block';
        // tester.current.style.display='flex'
        tester.current.classList.add('show-menu');

    }
    const closeMenu = ()=>{
        // tester.current.style.display='block';
        // tester.current.style.display='none'
        tester.current.classList.remove('show-menu');

    }

    return(
        <nav className={'navbar adminNav'}>
            <NavLink to={'/dash'} className={'logo'}>
                <h1>Birderino+</h1>
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
                <li role="menuitem" className={'hide'}>
                    <NavLink to={'/settings'} activeclassname={'active'} className={'links'}>
                        <span tabIndex="0">Settings</span>
                    </NavLink>
                </li>
                <li role="menuitem" className={'hide'}>
                    <NavLink to={'/'} activeclassname={'active'} className={'links'}>
                        <span tabIndex="0">Sign out</span>
                    </NavLink>
                </li>
            </ul>
            <div className={'hide2'}>
                <NavLink to={'/settings'} activeclassname={'active'} className={'settings_links'}>
                    <span className={'settings'} tabIndex="0"><IoSettingsSharp /></span>
                </NavLink>
                <NavLink to={'/'} activeclassname={'active'} className={'diff'}>
                    <span className={'signout'} tabIndex="0">Sign out</span>
                </NavLink>
            </div>

        </nav>
    )
}

export default AdminNav;