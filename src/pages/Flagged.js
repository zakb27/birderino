import React from "react";

import AdminNav from "../components/AdminNav"
import { useDispatch, useSelector } from 'react-redux';

const Dash = () =>{
    return(
        <>
            <AdminNav />
            <div className={'flagPage background'}>
                <h1>Flagged tickets</h1>
                <div className="items_container">
                    <div className="flagged"></div>
                    <div className="fun"></div>
                </div>
            </div>
        </>
    )

}


export default Dash;