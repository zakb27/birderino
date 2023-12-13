import React,{useState} from "react";

import AdminNav from "../components/AdminNav"
import { useDispatch, useSelector } from 'react-redux';
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import Footer from "../components/Footer";

const FlaggedTickets = () =>{
    return(<>

            <div className="flagg">
                <h2>Robin</h2>
                <div className="reasons">
                    <h2>Flag reason</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                <div className="butContainer">
                    <button className={'approve'}>Approve</button>
                    <button className={'reject'}>Reject</button>
                </div>
            </div>
    </>
    )
}
const Reviewed = () =>{
    return(
        <>
    <div className="reviewd">
        <h2>Robin</h2>
        <h2>Lorem ipsum </h2>
        <button className={'approveDiff'}>Approved</button>
    </div>
        </>
    )
}

const Flagged = () =>{
    const [flaggedExpanded,changeFlagged] = useState(false)
    const [checkedExpanded,changeChecked] = useState(false)
    const handleFlagged = () =>{
        changeChecked(false)
        changeFlagged(!flaggedExpanded)
    }
    const handleChecked = () =>{
        changeFlagged(false)
        changeChecked(!checkedExpanded)
    }
    const flagArray = []
    const reviewArray = []

    for(let i =0;i<10;i++){
        flagArray.push(<FlaggedTickets />)
    }
    for(let i =0;i<10;i++){
        reviewArray.push(<Reviewed />)
    }

    return(
        <>
            <AdminNav />
            <div className={'flagPage background'}>
                <h1>Flagged tickets</h1>
                <div className="items_container">
                    <div className="flagged_container">
                        <h2>View flagged tickets</h2>
                        {!flaggedExpanded?
                            <button onClick={e=>{handleFlagged()}} > <FaAngleDown /></button>
                            :
                            <button onClick={e=>{handleFlagged()}} > <FaAngleUp /></button>
                        }
                    </div>
                    {flaggedExpanded&&
                        <div className={'flag_container_container'}>
                            {flagArray}
                        </div>

                    }
                    <div className="checked_container">
                        <h2>View reviewed tickets</h2>
                        {!checkedExpanded?
                            <button onClick={e=>{handleChecked()}} > <FaAngleDown /></button>
                            :
                            <button onClick={e=>{handleChecked()}} > <FaAngleUp /></button>
                        }

                    </div>
                    {checkedExpanded&&
                        <div className={'review_container_container'}>
                            {reviewArray}
                        </div>

                    }
                </div>
            </div>
            <Footer />
        </>
    )

}


export default Flagged;