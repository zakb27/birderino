import './App.css';
import Dash from './pages/Dash.js'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Register from './pages/Register'
import Submit from './pages/Submit'
import Settings from './pages/Settings'
import DashNav from './components/DashNav'
import Stats from './pages/Stats'
import Flagged from './pages/Flagged'
import Confirm from './pages/Confirm'
import SearchStats from "./pages/SearchStats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Guide from "./pages/Guide";
import Footer from "./components/Footer";

function App() {
    const AuthCheck = () => {
        return useSelector((state) => state.user.isLoggedIn);
    };
  return (
    <div className="App">
        <BrowserRouter>

        <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    exact
                    path='/signin'
                    element={<SignIn />}
                />
                <Route
                    exact
                    path='/register'
                    element={<Register />}
                />
            <Route
                exact
                path='/guide'
                element={<Guide />}
            />
            <Route exact path='/settings' element={<Settings />} />
            <Route exact path='/dash' element={AuthCheck() ? <Dash /> : <Home />} />
                <Route exact path='/submit' element={AuthCheck()  ? <Submit /> : <Home />} />
                <Route exact path='/stats' element={AuthCheck()  ? <Stats /> : <Home />} />
                <Route exact path='/flagged' element={AuthCheck()  ? <Flagged /> : <Home />} />
                <Route exact path='/SearchStats' element={AuthCheck()  ? <SearchStats /> : <Home />} />
                <Route exact path='/confirm' element={AuthCheck()  ? <Confirm /> : <Home />} />


        </Routes>
            </BrowserRouter>


    </div>
  );
}

export default App;
