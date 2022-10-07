import React from 'react';

const UserRow = ({ user }) => {
    const { email, role } = user;
    console.log(user)

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.confirm("successfully made an Admin")

            })
    }
    return (
        <div>
            <tr className='w-full'>
                {/* <th>1</th> */}
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                <td>{role === 'admin' && <p>You are an Admin</p>}</td>
                {/* <td><button class="btn btn-xs">Remove User</button></td> */}
            </tr>
        </div>
    );
};

export default UserRow;