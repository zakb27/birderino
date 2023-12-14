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
                    <h3>Join us in making observations of birds!
                        Discover facts! Discover new birds! Learn new things!</h3>
                    <button onClick={e=>navigate('/register')} tabIndex='0'>Register</button>
                </div>
                <img src="https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kingfisher perched on a branch looking to the left"/>
            </section>
            <section className="birdsections">
                <div>
                    <img src="https://images.unsplash.com/photo-1551085254-e96b210db58a?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Yellow billed toucan perched on a branch looking to the left"/>
                    <h2>Submit results</h2>
                    <p>See what a sense of fulfilment you can receive from submitting your results of birds!</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Robin perched on a branch chirping"/>
                    <h2>View statistics</h2>
                    <p>View the statistics made by our community! </p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1552727451-6f5671e14d83?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hummingbird in mid flight"/>
                    <h2>Bird of the day</h2>
                    <p>Discover facts about the bird of the day!</p>
                </div>

            </section>

            <Footer />

        </div>

    </>)
}

export default Home;