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
                <Route exact path='/dash' element={AuthCheck() ? <Dash /> : <DashNav />} />
                <Route exact path='/submit' element={AuthCheck()  ? <Submit /> : <DashNav />} />
                <Route exact path='/settings' element={AuthCheck()  ? <Settings /> : <DashNav />} />
                <Route exact path='/stats' element={AuthCheck()  ? <Stats /> : <DashNav />} />
                <Route exact path='/flagged' element={AuthCheck()  ? <Flagged /> : <DashNav />} />
                <Route exact path='/SearchStats' element={AuthCheck()  ? <SearchStats /> : <DashNav />} />
                <Route exact path='/confirm' element={AuthCheck()  ? <Confirm /> : <DashNav />} />

            </Routes>
            </BrowserRouter>

    </div>
  );
}

export default App;
