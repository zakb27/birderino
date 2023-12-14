import React, {useRef} from "react";
import AdminNav from "../components/AdminNav";
import UserNav from "../components/UserNav";
import {FaToggleOff, FaToggleOn} from "react-icons/fa6";
import {FaMinus, FaPlus} from "react-icons/fa";
import Slider from "@mui/material/Slider/Slider";
import {useSelector} from "react-redux";
import DashNav from "../components/DashNav";
import Footer from "../components/Footer";


const Guide = () =>{
    const teseter = useRef()
    const isAdmin = useSelector((state) => state.user.isAdmin);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

return(
    <>
        {isLoggedIn?
        (isAdmin ?
            (<AdminNav />)
            :
            (<UserNav />)
        )
        :
            (<DashNav />)
        }
        <div className={'settingsPage background'}>

            <div className="guideContainer">
                <h2 ref={teseter} className={'settingsTitle'}>Main Guide</h2>

                <div className={'switches_container'}>
                        <h2 className={'bigtest'}>Sign in and register</h2>
                        <p>Please enter your required information (email, password, and optional code) into the form
                            and click submit which shall take you to the dashboard specified to your account.
                        </p>
                </div>
                <div className={'switches_container'}>
                        <h2 className={'bigtest'}>Navigation</h2>
                        <p>You can move between pages by selecting the navigation links located at the top of the pages,
                            the page you are on is indicated by a subtle background colour on each link.
                        </p>
                </div>
                <div className={'switches_container'}>
                        <h2 className={'bigtest'}>Statistics</h2>
                        <p>You can view the statistics page by clicking it in the navigation bar, upon loading you can observe a search bar and a heatmap.
                            You have the option to either search for specific birds through the search bar or by simply clicking the view all birds button.
                            This will provide a display of birds that shows how many have been seen and a short description that can be expanded
                            by clicking the expand icon, this will give a bigger description. You can return by either clicking the back arrow or going to another page.
                        </p>
                </div>
                <div className={'switches_container'}>
                        <h2 className={'bigtest'}>Submit results</h2>
                        <p>You can submit your results through the submit results page by clicking it in the navigation bar.
                            There are icons to indicate whether you are increasing the tally of a certain bird with a plus and minus
                            icon. You can also expand this by the expand and minimise button, once you have finished tallying you can click
                            the submit button to check your answers and optionally submit a pin location, once this is done you can submit again
                            and then you will receive confirmation of your submissions.
                        </p>
                </div>
                <div className={'switches_container'}>
                    <h2 className={'bigtest'}>Accessibility</h2>
                    <p>You have the option to click the cog icon to access accessibility settings where you are greeted
                        with the option to turn high contrast, colour blind modes, turn off animations and to
                    </p>
                </div>



            </div>
            <Footer />

        </div>
    </>
)

}
export default Guide;