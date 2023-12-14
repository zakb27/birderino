import React,{useState,useEffect} from "react";
import { FaGithub } from "react-icons/fa";
import {NavLink} from "react-router-dom";
const Footer = () =>{

    return(<>
        <footer>
            <NavLink to={'/guide'} activeclassname={'else'}>
                <h4>Guide of use</h4>
            </NavLink>
            <a href="https://github.com/zakb27/birderino">
                <FaGithub />
                <h4>Made by the Birderino team</h4>
            </a>


            <NavLink to={'/settings'} activeclassname={'else'}>
                <h4>Accessibility</h4>
            </NavLink>
        </footer>
        </>
    )
}

export default Footer;