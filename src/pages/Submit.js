import React from "react";
import DashNav from "../components/DashNav"
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from "../components/AdminNav";
import UserNav from "../components/UserNav";


const Submit = () =>{


    const isAdmin = useSelector((state) => state.user.isAdmin);
    return(
        <>
            {isAdmin ?
                (<AdminNav />)
                :
                (<UserNav />)
            }
            <div className={'submitPage background'}>
                <p>Submit page</p>
            </div>
        </>
    )
}

export default Submit;