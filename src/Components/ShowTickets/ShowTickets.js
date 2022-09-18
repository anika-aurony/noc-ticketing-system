import React, { useEffect, useState } from 'react';
import UpdateModal from './UpdateModal';

const ShowTickets = () => {
    const [complains, setComplains] = useState([]);
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/ticket')
            .then(res => res.json())
            .then(data => setComplains(data))
    }, [])

    

    return (
        <div className='m-11'>
            <h1 className='text-2xl text-center my-4'>Complain Tickets</h1>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>complain</th>
                            <th>Status</th>
                            <th>Assign</th>
                            
                            <th>ETR</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            complains.map(complain => <tr key={complain._id}>
                                <td>{complain._id}</td>
                                <td>{complain.name}</td>
                                <td>{complain.type}</td>
                                <td>{complain.complain}</td>
                                <td>{complain.status}</td>
                                <td>{complain.assign}</td>
                                <td>{complain.ETR}</td>
                                
                                <td>
                                    <label onClick={()=> setUpdate(complain)} for="update-modal" class="btn modal-button">Update</label>


                                </td>
                                
                            </tr>)
                        }


                    </tbody>



                </table>
                {
                    update && <UpdateModal update={update} setUpdate={setUpdate} setComplains={setComplains}></UpdateModal>
                }
            </div>
        </div >
    );
};

export default ShowTickets;