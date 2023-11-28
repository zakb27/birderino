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
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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



            <form onSubmit={handleSubmit} className={'registerForm'}>
                <h1>Register</h1>

                <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Email..."}
                required
            />
                <label>Confirm Email:</label>
                <input
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
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
                <label>Confirm password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={"Password..."}

                    required
                />

            <label>Associated Code:(Optional)</label>
            <input
                type="text"
                value={code}
                onChange={(e) => setAssociate(e.target.value)}
                placeholder={"Associate..."}
            />

            <button type="submit">Register</button>
                <p>Already have an account? Sign in <span onClick={e=>navigate('/signin')}>here:</span> </p>
        </form>
            </div>
    </>
)
}

export default Register;