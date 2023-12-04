import React from "react";

import AdminNav from "../components/AdminNav"
import UserNav from "../components/UserNav"
import { useDispatch, useSelector } from 'react-redux';
const Confirm = () =>{

    const isAdmin = useSelector((state) => state.user.isAdmin);
    console.log(isAdmin)
    return(
        <>
            {isAdmin ?
                (<AdminNav />)
                :
                (<UserNav />)
            }
            <div className={'background'}>
                <h1 style={{'margin':'200px auto'}}>Submission complete</h1>
            </div>
        </>
    )

}


export default Confirm;