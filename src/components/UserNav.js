import React, {useRef} from "react";
import '../styles/nav.css'
import {NavLink} from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {IoMdClose} from "react-icons/io";
const UserNav = () =>{

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
            <NavLink to={'/dash'} className={'logo'}>
                <h1>Birderino Standard</h1>
            </NavLink>
            <RxHamburgerMenu onClick={e=>openMenu} />
            <ul ref={tester} role="menu" aria-label="menu">
                <IoMdClose onClick={e=>closeMenu()}/>
                <li role="menuitem">
                    <NavLink to={'/dash'} activeclassname={'active'} className={'links'}>
                        <span className={'dash'} tabIndex="0">Dashboard</span>
                    </NavLink>
                </li>

                <li role="menuitem">
                    <NavLink to={'/stats'} activeclassname={'active'} className={'links'}>
                        <span className={'stats'}>Statistics</span>
                    </NavLink>
                </li>
                <li role="menuitem" tabIndex="0">
                    <NavLink to={'/submit'} activeclassname={'active'} className={'links'}>
                        <span className={'submit'}  tabIndex="0">Submit results</span>
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

export default UserNav;