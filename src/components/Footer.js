import React,{useState,useEffect} from "react";
import { FaGithub } from "react-icons/fa";
import {NavLink} from "react-router-dom";
const Footer = () =>{

    return(<>
        <footer>
            <NavLink to={'/guide'} activeclassname={'else'}>
                <h1>Guide of use</h1>
            </NavLink>
            <a href="https://github.com/zakb27/birderino">
                <FaGithub />
                <h4>Made by Birderino team</h4>
            </a>


            <NavLink to={'/settings'} activeclassname={'else'}>
                <h1>Accessibility</h1>
            </NavLink>
        </footer>
        </>
    )
}

export default Footer;