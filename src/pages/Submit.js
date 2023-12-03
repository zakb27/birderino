import React, {useState} from "react";
import DashNav from "../components/DashNav"
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from "../components/AdminNav";
import UserNav from "../components/UserNav";
import {FaExpand} from "react-icons/fa";
import {FiMinimize} from "react-icons/fi";
import {MdOutlineArrowBack} from "react-icons/md";
import {BirdData} from "../tools/BirdData";
import {useNavigate} from "react-router-dom";
import { FaPlus,FaMinus } from "react-icons/fa";

const SubmitCard = ({bird}) => {
    const [isExpanded, setExpanded] = useState(false);
    const [number,changeNumber] = useState(0);
    const navigate = useNavigate();
    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div className={`bird ${isExpanded ? 'expanded' : ''}`}>
            <img src={bird.image} alt={`Image of ${bird.name}`} />
            <div className="remaining">
                <div className="titles">
                    <h1 className={'left'}>{bird.name}</h1>
                    <h4 className={'left'}>({bird.scienceName})</h4>
                </div>

                {isExpanded ? <p id="bigSummary" className={'left'}>{bird.bigSummary}</p>:<p id="miniSummary" className={'left'}>{bird.miniSummary}</p>}
                <div className="submission">
                    <FaMinus onClick={e=>{
                        if(number>0) {
                            changeNumber(number-1)}
                    }}/>
                    <input min={0} max={50} typeof="number"  value={number} onChange={(e) => changeNumber(e.target.value)} />
                    <FaPlus onClick={e=>changeNumber(number+1)}/>
                </div>

            </div>

            <button onClick={toggleExpand}>
                {!isExpanded ? <FaExpand />:<FiMinimize />}
            </button>


        </div>
    );
};
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
                <div className={'pageTitle'}>
                    <h1>Submit results</h1>
                </div>
                <div className="birdContainer">
                    {BirdData.map((bird, index) => (
                        <SubmitCard key={index} bird={bird} />
                    ))}

                </div>

            </div>
        </>
    )
}

export default Submit;