import React, {useRef} from "react";
import '../styles/nav.css'
import {NavLink} from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx";

import { IoMdClose } from "react-icons/io";
const DashNav = () =>{


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
            <NavLink to={'/'} activeclassname={'else'}  className={'logo'}>
                <h1>Birderino</h1>
            </NavLink>
            <RxHamburgerMenu onClick={e=>openMenu()}/>
            <ul ref={tester} role="menu" aria-label="menu">
                <IoMdClose onClick={e=>closeMenu()}/>
                <li role="menuitem" >
                    <NavLink to={'/signin'} className={'links'}>
                        <span className={'sign'} tabIndex="0">Sign in</span>
                    </NavLink>
                </li>

                <li role="menuitem">
                    <NavLink to={'/register'} className={'dashes'}>
                        <span className={'register'} tabIndex="0">Register</span>
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default DashNav;