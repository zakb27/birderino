import React from "react";

import AdminNav from "../components/AdminNav"
import UserNav from "../components/UserNav"
import { useDispatch, useSelector } from 'react-redux';
import Footer from "../components/Footer";
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
                <h1>Dashboard</h1>
                <section className="mission2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Eurasian_blue_tit_Lancashire.jpg/440px-Eurasian_blue_tit_Lancashire.jpg" alt="Blue tit bird"/>

                    <div>
                        <h1>The Blue Tit</h1>
                        <h3>The blue tit (Cyanistes caeruleus) is a common garden bird in the UK. It has bright blue
                            and yellow plumage with a distinctive white face. Blue tits are active and acrobatic,
                            often seen hanging upside down to feed. They have a varied diet that includes insects,
                            seeds, and suet.</h3>
                        <h5>Total count of 321 today!</h5>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )

}


export default Dash;