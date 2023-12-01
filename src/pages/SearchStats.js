import React from "react";
import DashNav from "../components/DashNav"
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from "../components/AdminNav";
import UserNav from "../components/UserNav";
import { MdOutlineArrowBack } from "react-icons/md";
import {useNavigate} from "react-router-dom";
import { FaExpand } from "react-icons/fa";
const SearchStats = () =>{
    const navigate = useNavigate()

    const isAdmin = useSelector((state) => state.user.isAdmin);

    const testFunction = () =>{
        const test = document.querySelector('#bigSummary')
        test.classList.toggle('tester')
    }


    return(
        <>
            {isAdmin ?
                (<AdminNav />)
                :
                (<UserNav />)
            }

            <div className="searchPage background">
                <div className={'pageTitle'}>
                    <button onClick={e=>navigate('stats')}><MdOutlineArrowBack /></button>
                    <h1>All birds</h1>
                </div>

                <div className="birdContainer">
                    <div className={'bird'}>
                        <img src="https://images.unsplash.com/photo-1552727451-6f5671e14d83?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of bird"/>
                        <h1>Robin</h1>
                        <p id={'miniSummary'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <p id={'bigSummary'}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        <p className={'seen'}>4201 seen</p>
                        <button onClick={e=>testFunction()}><FaExpand /></button>
                    </div>

                </div>





            </div>
        </>
    )
}

export default SearchStats;