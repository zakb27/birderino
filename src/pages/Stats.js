import React from "react";
import DashNav from "../components/DashNav"
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from "../components/AdminNav";
import UserNav from "../components/UserNav";
import { FaSearch } from "react-icons/fa";
import image from '../assets/MapChart_Map.png'
import image2 from '../assets/png.png'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
const Stats = () =>{
    const navigate = useNavigate();
    const items = [
        {
            id: 0,
            name: 'European Robin'
        },
        {
            id: 1,
            name: 'Blue Tit'
        },
        {
            id: 2,
            name: 'Blackbird'
        },
        {
            id: 3,
            name: 'Goldfinch'
        },
        {
            id: 4,
            name: 'Peregrine Falcon'
        },
        {
            id: 5,
            name: 'Common Kestrel'
        },
        {
            id: 6,
            name: 'Wood Pigeon'
        },
        {
            id: 7,
            name: 'Great Tit'
        },
        {
            id: 8,
            name: 'Long-tailed Tit'
        },
        {
            id: 9,
            name: 'Collared Dove'
        },
        {
            id: 10,
            name: 'Magpie'
        },
        {
            id: 11,
            name: 'Chaffinch'
        },
        {
            id: 12,
            name: 'Wren'
        },
        {
            id: 13,
            name: 'Nuthatch'
        }
    ]
    const handleOnSearch = (string, results) => {
        console.log(string);
        // navigate('/SearchStats',{item:string});
    }

    const handleOnHover = (result) => {
    }

    const handleOnSelect = (item) => {
        console.log(item.name);
        navigate('/SearchStats',{ state: {item:item.name}});
    }

    const handleOnFocus = () => {
        console.log('test')
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left',cursor:'pointer'}}>{item.name}</span>
            </>
        )
    }

    const isAdmin = useSelector((state) => state.user.isAdmin);
    return(
        <>
            {isAdmin ?
                (<AdminNav />)
                :
                (<UserNav />)
            }
            <div className={'statsPage background'}>
                <div className="searchContainer">
                    <h1>View Statistics</h1>
                    <div className={'searchBar'}>
                        <ReactSearchAutocomplete
                            items={items}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            autoFocus
                            formatResult={formatResult}
                        />
                    </div>
                    <button className={'viewAllButton'} onClick={e=>navigate('/SearchStats',{ state: {item:''}})} >
                        View All
                    </button>


                </div>

                <div className="charts">

                    {/*<div className="test1"></div>*/}
                    {/*<div className="test2"></div>*/}
                    {/*<div className="piChart">*/}
                    {/*    <h2>Distribution of top birds</h2>*/}
                    {/*    <img src={image2} alt="Pi Chart of top birds"/>*/}
                    {/*</div>*/}

                    <div className="heatmap">
                        <div className="rankings">
                            <h2>Rankings and heatmap</h2>
                            <div className="birds_rank">
                                <h3>Crow: </h3>
                                <h3>4567</h3>
                            </div>
                            <div className="birds_rank">
                                <h3>Magpie: </h3>
                                <h3>3432</h3>
                            </div>
                            <div className="birds_rank">
                                <h3>Robin: </h3>
                                <h3>2344</h3>
                            </div>
                            <div className="birds_rank">
                                <h3>Seagull: </h3>
                                <h3>2333</h3>
                            </div>
                            <div className="birds_rank">
                                <h3>Pigeon: </h3>
                                <h3>1642</h3>
                            </div>
                        </div>
                        <img src={image} alt="Heatmap of the UK"/>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Stats;