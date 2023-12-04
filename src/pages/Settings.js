import React,{useState,useRef,useEffect} from "react";
import DashNav from "../components/DashNav"
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from "../components/AdminNav";
import UserNav from "../components/UserNav";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import Slider from "@mui/material/Slider/Slider";
import {cAnimations, cContrast, cDarkMode, cDeuter, cSliders} from "../tools/AccessActions";

const Settings = () =>{
    const dispatch = useDispatch()

    const [highContrast,changeContrast] = useState(useSelector((state) => state.new.highContrast))
    const [darkMode,changeDarkMode] = useState(useSelector((state) => state.new.darkMode))
    const [disableAnimations,changeAnimations] = useState(useSelector((state) => state.new.disableAnimations))
    const [sliderState,changeSlider] = useState(useSelector((state) => state.new.sliderState))
    const [deuter,changeDeuter] = useState(useSelector((state) => state.new.deuter))
    const teseter = useRef()
    const isAdmin = useSelector((state) => state.user.isAdmin);
    const funkyContrast = async()=>{
        changeContrast(!highContrast)
        dispatch(cContrast(highContrast))
        console.log(highContrast)
        if(!highContrast){
            document.documentElement.style.setProperty('--main1', 'white');
            document.documentElement.style.setProperty('--main2', 'black');
            document.documentElement.style.setProperty('--main3', 'white');
            document.documentElement.style.setProperty('--main4', 'black');
            document.documentElement.style.setProperty('--main5', 'black');
        }
        else{
            document.documentElement.style.setProperty('--main1', '#344e41');
            document.documentElement.style.setProperty('--main2', '#a3b18a');
            document.documentElement.style.setProperty('--main3', '#3a5a40');
            document.documentElement.style.setProperty('--main4', '#588157');
            document.documentElement.style.setProperty('--main5', '#CCD5AEFF');
        }

    }
    const funkyDark = ()=>{

        dispatch(cDarkMode(!darkMode))
        changeDarkMode(!darkMode)
        if(!darkMode){
            document.documentElement.style.setProperty('--main1', '#e0ece6');
            document.documentElement.style.setProperty('--main2', '#20231b');
            document.documentElement.style.setProperty('--main3', '#c6fcce');
            document.documentElement.style.setProperty('--main4', '#172116');
            document.documentElement.style.setProperty('--main5', '#1c1f12');
        }
        else{
            document.documentElement.style.setProperty('--main1', '#344e41');
            document.documentElement.style.setProperty('--main2', '#a3b18a');
            document.documentElement.style.setProperty('--main3', '#3a5a40');
            document.documentElement.style.setProperty('--main4', '#588157');
            document.documentElement.style.setProperty('--main5', '#CCD5AEFF');
        }

    }
    const funkyAnimations = ()=>{
        dispatch(cAnimations(!disableAnimations))
        changeAnimations(!disableAnimations)

        document.body.classList.toggle('disable-transitions')


    }
    const changerColour = () =>{
        dispatch(cDeuter(!deuter))
        changeDeuter(!deuter)

    }

    const handleFontSizeChange = (event) => {
        const newFontSize = parseInt(event.target.value, 10);
        changeSlider(newFontSize);
        changeFontSize(newFontSize)
        dispatch(cSliders(newFontSize))
    };

    const changeFontSize = (item)=>{
        const rootItem = document.querySelector(":root");
        console.log(rootItem)
        rootItem.style.fontSize = item.toString() + 'px';

    }

    return(
        <>
            {isAdmin ?
                (<AdminNav />)
                :
                (<UserNav />)
            }
            <div className={'settingsPage background'}>

                <div className="settingsContainer">
                    <h2 ref={teseter} className={'settingsTitle'}>Accessibility Settings</h2>

                    <div className={'switches_container'}>
                        <div className="highContrast">
                            <h2 className={'bigtest'}>High Contrast</h2>
                            <button onClick={e=>funkyContrast()}>
                                {highContrast ? <FaToggleOn style={{ color: highContrast ? 'green' : 'black' }} /> : <FaToggleOff style={{ color: highContrast ? 'green' : 'black' }} />}
                            </button>

                        </div>
                        <div className="darkMode">
                            <h2>Dark Mode</h2>
                            <button onClick={e=>funkyDark()}>
                                {darkMode ? <FaToggleOn style={{ color: darkMode ? 'green' : 'black' }} /> : <FaToggleOff style={{ color: darkMode ? 'green' : 'black' }} />}
                            </button>
                        </div>
                        <div className="disableAnimations">
                            <h2>Animations</h2>
                            <button onClick={e=>funkyAnimations()}>
                                {disableAnimations ?  <FaToggleOn style={{ color: disableAnimations ? 'green' : 'black' }} /> : <FaToggleOff style={{ color: disableAnimations ? 'green' : 'black' }} />}
                            </button>
                        </div>
                        <div className="deuter">
                            <h2>Deuteranomaly</h2>
                            <button onClick={e=>changerColour()}>
                                {deuter ?  <FaToggleOn style={{ color: deuter ? 'green' : 'black' }} /> : <FaToggleOff style={{ color: deuter ? 'green' : 'black' }} />}
                            </button>
                        </div>

                    </div>

                    <div className="fontSlider">
                        <Slider
                            aria-label="Small steps"
                            value = {sliderState}
                            onChange={handleFontSizeChange}
                            step={1}
                            marks
                            min={17}
                            max={24}
                            valueLabelDisplay="auto"
                        />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Settings;