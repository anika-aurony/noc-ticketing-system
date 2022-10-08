import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();

    const [complains, setComplains] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/ticket')
            .then(res => res.json())
            .then(data => setComplains(data))
    }, [])

    const OFilter = complains.filter(complain => complain.status === "pending")

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
        navigate('/')
    };

    return (
        <div class="navbar bg-gradient-to-r from-cyan-700 to-cyan-400">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>

                        

                        {
                            user && <li><Link to="/complain">Complain</Link></li>
                        }
                        {
                            admin && <li><Link to="/showticket">Tickets
                                <div class="badge badge-error absolute top-1 right-0">{OFilter.length}</div>
                            </Link></li>
                        }
                        {
                            user && !admin && <li><Link to="/dashboard">Complain Status</Link></li>
                        }
                        {
                            admin && <li><Link to="/kpi">KPI</Link></li>
                        }
                        {
                            admin && <li><Link to="/users">All Users</Link></li>
                        }
                        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>


                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">NOC Ticketing System</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>



                    {
                        user && <li><Link to="/complain">Complain</Link></li>
                    }
                    {
                        admin && <li><Link to="/showticket">Tickets
                            <div class="badge badge-error absolute top-1 right-0">{OFilter.length}</div>
                        </Link></li>
                    }
                    {
                        user && !admin && <li><Link to="/dashboard">Complain Status</Link></li>
                    }
                    {
                        admin && <li><Link to="/kpi">KPI</Link></li>
                    }
                    {
                        admin && <li><Link to="/users">All Users</Link></li>
                    }
                    <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;