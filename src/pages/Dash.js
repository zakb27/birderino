import React from "react";

import AdminNav from "../components/AdminNav"
import UserNav from "../components/UserNav"
import { useDispatch, useSelector } from 'react-redux';
const Dash = () =>{
    const isAdmin = useSelector((state) => state.user.isAdmin);
    console.log(isAdmin)
    return(
        <>
            {isAdmin ?
                (<AdminNav />)
                :
                (<UserNav />)
            }
            <div className={'dashPage background'}>
                <section className="mission mission2">
                    <div>
                        <h1>Bird of the day</h1>
                        <h3>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bird sat on a branch"/>
                </section>
            </div>
        </>
    )

}


export default Dash;