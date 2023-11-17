import React from "react";
import '../styles/nav.css'
const DashNav = () =>{


    return(
        <nav className={'navbar'}>
            <h1>Birderino</h1>
            <ul>
                <li className={'sign'}>Sign in </li>
                <li className={'register'}>Register</li>
            </ul>
        </nav>
    )

}

export default DashNav;