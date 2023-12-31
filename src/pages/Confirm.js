import React from "react";

import AdminNav from "../components/AdminNav"
import UserNav from "../components/UserNav"
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
const Confirm = () =>{
    const navigate = useNavigate()
    const isAdmin = useSelector((state) => state.user.isAdmin);
    console.log(isAdmin)
    return(
        <>
            {isAdmin ?
                (<AdminNav />)
                :
                (<UserNav />)
            }
            <div className={'confirmPage background'}>
                <div className="confirmContainer">
                    <h1>Submission complete</h1>
                    <button className={'submitBird'} onClick={e=>navigate('/dash')}> Return -></button>
                </div>
                <Footer />

            </div>
        </>
    )

}


export default Confirm;