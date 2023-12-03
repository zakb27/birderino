import React,{useState,useEffect} from "react";
import DashNav from "../components/DashNav"
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from "../components/AdminNav";
import UserNav from "../components/UserNav";
import { MdOutlineArrowBack } from "react-icons/md";
import {useNavigate} from "react-router-dom";
import { FaExpand } from "react-icons/fa";
import { FiMinimize } from "react-icons/fi";
import {BirdData} from "../tools/BirdData";



const BirdCard = ({bird}) => {
    const [isExpanded, setExpanded] = useState(false);

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
                <h4 className="seen left bottom">{bird.seen} seen</h4>
            </div>
                <button onClick={toggleExpand}>
                    {!isExpanded ? <FaExpand />:<FiMinimize />}
                </button>


        </div>
    );
};


const SearchStats = () =>{
    const navigate = useNavigate()

    const isAdmin = useSelector((state) => state.user.isAdmin);



    return(
        <>
            {isAdmin ?
                (<AdminNav />)
                :
                (<UserNav />)
            }

            <div className="searchPage background">
                <div className={'pageTitle'}>
                    <button onClick={e=>navigate('/stats')}><MdOutlineArrowBack /></button>
                    <h1>All birds</h1>
                </div>
                <div className="birdContainer">
                    {BirdData.map((bird, index) => (
                        <BirdCard key={index} bird={bird} />
                    ))}

                </div>


            </div>
        </>
    )
}

export default SearchStats;