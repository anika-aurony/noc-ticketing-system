
import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Complain from './Components/Complain/Complain';
import ShowTickets from './Components/ShowTickets/ShowTickets';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="complain" element={<Complain />} />
        <Route path="showticket" element={<ShowTickets />} />
        <Route path="login" element={<Login></Login>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
