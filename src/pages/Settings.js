import React,{useState,useRef,useEffect} from "react";
import DashNav from "../components/DashNav"
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from "../components/AdminNav";
import UserNav from "../components/UserNav";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import Slider from "@mui/material/Slider/Slider";

const Settings = () =>{
    const [highContrast,changeContrast] = useState(false)
    const [darkMode,changeDarkMode] = useState(false)
    const [disableAnimations,changeAnimations] = useState(true)
    const [sliderState,changeSlider] = useState(10)
    const teseter = useRef()
    const isAdmin = useSelector((state) => state.user.isAdmin);

    const funkyContrast = ()=>{
        changeContrast(!highContrast)
    }
    const funkyDark = ()=>{
        changeDarkMode(!darkMode)
    }
    const funkyAnimations = ()=>{
        changeAnimations(!disableAnimations)
    }

    const handleFontSizeChange = (event) => {
        const newFontSize = parseInt(event.target.value, 10);
        changeSlider(newFontSize);
        changeFontSize(newFontSize)
    };

    const changeFontSize = (item)=>{
        const rootItem = document.querySelector(":root");
        console.log(rootItem)
        rootItem.style.fontSize = item.toString() + 'px';
    }
    // const globalStyles = {
    //     fontSize: `${sliderState}rem`,
    // };



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
                            <h2>Disable Animations</h2>
                            <button onClick={e=>funkyAnimations()}>
                                {disableAnimations ?  <FaToggleOn style={{ color: disableAnimations ? 'green' : 'black' }} /> : <FaToggleOff style={{ color: disableAnimations ? 'green' : 'black' }} />}
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
                            min={10}
                            max={18}
                            valueLabelDisplay="auto"
                        />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Settings;