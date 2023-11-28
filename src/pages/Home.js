import React,{useEffect} from "react";
import DashNav from "../components/DashNav"
import Footer from "../components/Footer";
import {logout} from "../tools/Actions";
import { useDispatch, useSelector } from 'react-redux';
import '../styles/main.css'
import {useNavigate} from "react-router-dom";

const Home = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    useEffect(() => {
        dispatch(logout())
        console.log(isLoggedIn)
    }, []);

    return(<>
        <DashNav />
        <div className={'homeContainer background'}>
            <section className="mission">
                <div>
                    <h1>Join the birdwatch</h1>
                    <h3>Discover the joy of bird counting! Your observations matter.
                        Join us in celebrating the beauty of birds. Count with purpose, connect with nature.</h3>
                    <button onClick={e=>navigate('/register')} tabIndex='0'>Register</button>
                </div>
                <img src="https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bird sat on a branch"/>
            </section>
            <section className="birdsections">
                <div>
                    <img src="https://images.unsplash.com/photo-1551085254-e96b210db58a?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Another bird sat on a branch"/>
                    <h2>Birds</h2>
                    <p>Discover the joy of bird counting! Your observations matter.</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Another bird sat on a branch"/>
                    <h2>Bees</h2>
                    <p>Discover the joy of bird counting! Your observations matter. </p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1552727451-6f5671e14d83?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Another bird sat on a branch"/>
                    <h2>Stats</h2>
                    <p>Discover the joy of bird counting! Your observations matter.</p>
                </div>

            </section>


        </div>
        <Footer />

    </>)
}

export default Home;