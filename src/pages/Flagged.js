import React from "react";

import AdminNav from "../components/AdminNav"
import { useDispatch, useSelector } from 'react-redux';

const Dash = () =>{
    return(
        <>
            <AdminNav />
            <div className={'flagPage background'}>
                <p>Flag page</p>
            </div>
        </>
    )

}


export default Dash;