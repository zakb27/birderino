import React,{useState} from "react";

import AdminNav from "../components/AdminNav"
import { useDispatch, useSelector } from 'react-redux';
import {FaAngleDown, FaAngleUp} from "react-icons/fa";


const Reviewed = () =>{
    
}

const Flagged = () =>{
    const [flaggedExpanded,changeFlagged] = useState(false)
    const [checkedExpanded,changeChecked] = useState(false)
    const handleFlagged = () =>{

        changeFlagged(!flaggedExpanded)
    }
    const handleChecked = () =>{

        changeChecked(!checkedExpanded)
    }

    return(
        <>
            <AdminNav />
            <div className={'flagPage background'}>
                <h1>Flagged tickets</h1>
                <div className="items_container">
                    <div className="flagged_container">
                        {!flaggedExpanded?
                            <button onClick={e=>{handleFlagged()}} > <FaAngleDown /></button>
                            :
                            <button onClick={e=>{handleFlagged()}} > <FaAngleUp /></button>
                        }
                        <h2>View flagged tickets</h2>
                    </div>

                    <div className="checked_container">
                        {!checkedExpanded?
                            <button onClick={e=>{handleChecked()}} > <FaAngleDown /></button>
                            :
                            <button onClick={e=>{handleChecked()}} > <FaAngleUp /></button>
                        }
                        <h2>View reviewed tickets</h2>

                    </div>
                </div>
            </div>
        </>
    )

}


export default Flagged;