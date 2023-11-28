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
            <NavLink to={'/dash'} activeclassname={'active'} className={'links'}>
                <h1>Birderino Standard</h1>
            </NavLink>
            <RxHamburgerMenu onClick={e=>openMenu} />
            <ul ref={tester}>
                <IoMdClose onClick={e=>closeMenu()}/>
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