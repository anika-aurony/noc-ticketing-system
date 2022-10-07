
import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const Users = () => {


    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (
        <div className='m-11 '>
            <h2 className="text-2xl text-center my-4"> All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            
                            <th>Email</th>
                            {/* <th></th> */}
                            
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=> <tr> <UserRow
                            key={user._id}
                            user={user}
                           ></UserRow> </tr>)
                       }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Users;