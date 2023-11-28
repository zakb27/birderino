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
            <NavLink to={'/'} className={'links'}>
                <h1>Birderino</h1>
            </NavLink>
            <RxHamburgerMenu onClick={e=>openMenu()}/>
            <ul ref={tester}>
                <IoMdClose onClick={e=>closeMenu()}/>
                <li>
                    <NavLink to={'/signin'} activeclassname={'active'} className={'links dashes'}>
                        <span className={'sign'}>Sign in</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/register'} activeclassname={'active'} className={'links dashes'}>
                        <span className={'register'}>Register</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default DashNav;