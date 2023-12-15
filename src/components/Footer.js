import React,{useState,useEffect} from "react";
import { FaGithub } from "react-icons/fa";
import {NavLink} from "react-router-dom";
const Footer = () =>{

    return(<>
        <footer>
            <NavLink to={'/guide'} activeclassname={'else'}>
                <h4 tabIndex="0" >Guide of use</h4>
            </NavLink>
            <a tabIndex="0" href="https://github.com/zakb27/birderino">
                <FaGithub />
                <h4 tabIndex="0">Made by the Birderino team</h4>
            </a>


            <NavLink tabIndex="0" to={'/settings'} activeclassname={'else'}>
                <h4 tabIndex="0">Accessibility</h4>
            </NavLink>
        </footer>
        </>
    )
}

export default Footer;