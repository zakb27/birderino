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
import { IoMdClose } from "react-icons/io";
import GoogleMapReact from 'google-map-react';
import Footer from "../components/Footer";
const SubmitCard = ({bird,updateBirdCount}) => {
    const [isExpanded, setExpanded] = useState(false);
    const [number,changeNumber] = useState(0);
    const navigate = useNavigate();
    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };

    const handleNumberChange = (num)=>{
        changeNumber(num);
        updateBirdCount(bird.name, num);
    }

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
                            handleNumberChange(number-1)}
                    }}/>
                    <input min={0} max={50} typeof="number"  value={number} onChange={(e) => changeNumber(e.target.value)} />
                    <FaPlus onClick={e=>handleNumberChange(number+1)}/>
                </div>

            </div>

            <button onClick={toggleExpand}>
                {!isExpanded ? <FaExpand />:<FiMinimize />}
            </button>


        </div>
    );
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Submit = () =>{
    const navigate = useNavigate();

    const isAdmin = useSelector((state) => state.user.isAdmin);

    const [birdCounts, setBirdCounts] = useState({});
    const [showSubmission, setShowSubmission] = useState(false);

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    // Callback function to update bird counts
    const updateBirdCount = (birdName, count) => {
        // setBirdCounts((prevCounts) => ({
        //     ...prevCounts,
        //     [birdName]: count,
        // }));
        setBirdCounts((prevCounts) => {
            // Create a copy of the previous counts
            const newCounts = { ...prevCounts };

            // Update the count for the bird
            newCounts[birdName] = count;

            // Remove entries with a zero count
            Object.keys(newCounts).forEach((key) => {
                if (newCounts[key] === 0) {
                    delete newCounts[key];
                }
            });

            return newCounts;
        });
    };

    const handleSubmit = (item) => {
        // You can access the bird counts in the `birdCounts` state
        console.log('Bird Counts:', birdCounts);
        setShowSubmission(true);
        // Perform your submission logic here
    };

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
                        <SubmitCard key={index} bird={bird} updateBirdCount={updateBirdCount} />
                    ))}

                </div>
                {/*<button onClick={handleSubmit}>Submit</button>*/}
                {Object.keys(birdCounts).length>0&&
                    <div className="previewContainer">
                        <div className="desktopPreview">
                            <ul>
                                {Object.entries(birdCounts).map(([birdName, count]) => (
                                    <li key={birdName}>
                                        {birdName}: {count}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className={'submitBird'} onClick={e=> {
                            setShowSubmission(true)
                        }}>Submit</button>
                    </div>
                }
                {Object.keys(birdCounts).length>0&&
                <button className={'submitBird2'} onClick={e=> {
                    handleSubmit(true)
                }}>Submit</button>
                }
                {showSubmission && (
                    <div className="modal">
                        <button className={'closeModal'} onClick={e=> {
                            setShowSubmission(false)
                        }}><IoMdClose /></button>
                        <h2>Submit results</h2>
                        <h4>Is this correct?</h4>
                        <div className="dropdown">
                        <ul>
                            {Object.entries(birdCounts).map(([birdName, count]) => (
                                <li key={birdName}>
                                    {birdName}: {count}
                                </li>
                            ))}
                        </ul>
                            <div className="dorp" style={{borderRadius: "25px"}}>

                                    <div id="my-map-display" style={{height:"100%", width: "100%", borderRadius: "25px"}}>
                                        <iframe style={{height:"100%", width: "100%", borderRadius: "25px",border:'0'}}
                                                src="https://www.google.com/maps/embed/v1/place?q=United+Kingdom&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                                    </div></div>
                        </div>
                        <button className={'submitBird3'} onClick={e=> {
                            navigate('/confirm')
                        }}>Submit</button>
                    </div>
                )}
                <Footer />
            </div>
        </>
    )
}

export default Submit;