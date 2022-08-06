import React, { useEffect, useState, useSyncExternalStore } from 'react';

const ShowTickets = () => {
    const [complains, setComplains] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ticket')
            .then(res => res.json())
            .then(data => setComplains(data))
    }, [])

    const updateStatus = event=> {
        event.preventDefault();
        const status = event.target.status.value;
        console.log(event)
        console.log(status)
     }

    return (
        <div className='m-11'>
            <h1 className='text-2xl text-center my-4'>Complain Tickets</h1>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Type</th>
                            <th>complain</th>
                            <th>Status</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            complains.map(complain => <tr key={complain._id}>

                                <td>{complain.name}</td>
                                <td>{complain.type}</td>
                                <td>{complain.complain}</td>
                                <td>{complain.status}</td>
                                
                                <td>
                                    <label for="my-modal" class="btn modal-button">Update</label>


                                    <input type="checkbox" id="my-modal" class="modal-toggle" />
                                    <div class="modal">
                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg">Please Update Current Status</h3>
                                            <select name="status" class="select select-bordered ">
                                                <option disabled selected>{complain.status}</option>
                                                <option>Pending</option>
                                                <option>On-progress</option>
                                                <option>Resolve</option>


                                            </select>
                                            <div class="modal-action">
                                                <label for="my-modal" class="btn" onClick={()=> updateStatus(complain._id)}>Update</label>
                                            </div>
                                        </div>
                                    </div></td>
                                
                            </tr>)
                        }


                    </tbody>



                </table>
            </div>
        </div >
    );
};

export default ShowTickets;