import React,{useState,useEffect} from "react";
import DashNav from "../components/DashNav"
import {useNavigate } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import {login,logout} from "../tools/Actions.js";
const Register = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [code, setAssociate] = useState('');


    useEffect(() => {
        dispatch(logout())
    }, []);

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


            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <label>Associated Code:(Optional)</label>
            <input
                type="text"
                value={code}
                onChange={(e) => setAssociate(e.target.value)}
            />

            <button type="submit">Register</button>
        </form>
            </div>
    </>
)
}

export default Register;