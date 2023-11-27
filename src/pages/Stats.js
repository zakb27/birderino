import React from "react";
import DashNav from "../components/DashNav"
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from "../components/AdminNav";
import UserNav from "../components/UserNav";


const Stats = () =>{
    const isAdmin = useSelector((state) => state.user.isAdmin);
    return(
        <>
            {isAdmin ?
                (<AdminNav />)
                :
                (<UserNav />)
            }
            <div className={'statsPage background'}>
                <p>Stats page</p>
            </div>
        </>
    )
}

export default Stats;