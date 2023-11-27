import React,{useState,useEffect} from "react";
import { FaGithub } from "react-icons/fa";
const Footer = () =>{

    return(<>
        <footer>
            <a href="https://github.com/zakb27/birderino">
                <FaGithub />
            </a>

            <h4>Made by Zak Brook</h4>
        </footer>
        </>
    )
}

export default Footer;