import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [tickets, setTickets] = useState([]);
    // const name = 'Z net'
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/ticket`)
                .then(res => res.json())
                .then(data => setTickets(data));
        }
    }, [user])

    const g = tickets.filter(ticket => ticket.clientMail === user.email)

    console.log(g);




    return (
        <div className='m-11'>
          
            <h1 className='text-2xl text-center my-4'>My Tickets: {g.length}</h1>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Type</th>
                            <th>complain</th>
                            <th>Status</th>
                            <th>Assign</th>
                            
                            <th>ETR</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            g.map(complain => <tr key={complain._id}>
                                
                                <td>{complain.name}</td>
                                <td>{complain.type}</td>
                                <td>{complain.complain}</td>
                                <td>{complain.status}</td>
                                <td>{complain.assign}</td>
                                <td>{complain.ETR}</td>
                                
                                
                                
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;