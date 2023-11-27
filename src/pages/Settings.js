import React from "react";
import DashNav from "../components/DashNav"
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from "../components/AdminNav";
import UserNav from "../components/UserNav";


const Settings = () =>{
    const isAdmin = useSelector((state) => state.user.isAdmin);
    return(
        <>
            {isAdmin ?
                (<AdminNav />)
                :
                (<UserNav />)
            }
            <div className={'settingsPage background'}>
                <p>Settings page</p>
            </div>
        </>
    )
}

export default Settings;