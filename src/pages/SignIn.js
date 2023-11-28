import React,{useState,useEffect} from "react";
import DashNav from "../components/DashNav"
import {login, logout} from "../tools/Actions";
import {useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom';
import Footer from "../components/Footer";


const SignIn = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [code, setAssociate] = useState('');

    dispatch(logout());

    const handleSubmit = (e) => {
        e.preventDefault();
        const registrationData = {
            email,
            password,
            code,
        };

        if(code!==''){
            dispatch(login(true))
        }
        else{
            dispatch(login(false))
        }
        setEmail('');
        setPassword('');
        setAssociate('');

        navigate('/dash')

    };

    return(<>
            <DashNav />
            <div className={'background'}>


            <form onSubmit={handleSubmit} className={'loginForm'}>
                <h1>Sign in</h1>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={"Email..."}
                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={"Password..."}
                    required
                />

                <label>Associate Code:(Optional)</label>
                <input
                    type="text"
                    value={code}
                    placeholder={"Associate..."}
                    onChange={(e) => setAssociate(e.target.value)}
                />

                <button type="submit" tabIndex='0'>Sign in</button>
                <p>Don't have an account? Register <span onClick={e=>navigate('/register')}>here:</span> </p>

            </form>
            </div>
            <Footer />

        </>
    )
}

export default SignIn;