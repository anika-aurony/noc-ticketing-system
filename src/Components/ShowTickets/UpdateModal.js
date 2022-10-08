import React from 'react';

const UpdateModal = ({ update, setUpdate, setComplains }) => {
    const { _id, clientMail, complainEmail, name, type, complain, status, assign, ETR } = update;
    const id = _id;
    const updateStatus = event => {
        event.preventDefault();
        const complainEmail = event.target.complainEmail.value;
        const name = event.target.name.value;
        const clientMail = event.target.clientMail.value;
        const status = event.target.status.value;
        const assign = event.target.assign.value;
        const ETR = event.target.ETR.value;
        const resolveDate = event.target.resolveDate.value;
        const updateComplain = {name, complainEmail, clientMail, status, assign, ETR, resolveDate };
        const url = `http://localhost:5000/ticket/${id}`
        console.log(url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateComplain),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                fetch('http://localhost:5000/ticket')
                    .then(res => res.json())
                    .then(data => setComplains(data))
            })


        console.log(_id, name, complainEmail, clientMail, status, assign, ETR)
        setUpdate(null)
    }
    return (
        <div>
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Update status for: {name} </h3>
                    <form onSubmit={updateStatus} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input hidden type="text" name='complainEmail' value={complainEmail} class="input input-bordered w-full max-w-xs" />
                        <input hidden type="text" name='name' value={name} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='clientMail' value={clientMail} class="input input-bordered w-full max-w-xs" />
                        <input type="text" value={type} class="input input-bordered w-full max-w-xs" />
                        <input type="text" value={complain} class="input input-bordered w-full max-w-xs" />
                        {/* <span class="label-text">Update Status</span> */}
                        <select name="status" class="select select-bordered w-full max-w-xs">
                            <option disabled selected>{status}</option>
                            <option value={"pending"}>Pending</option>
                            <option value={"on-progress"}>On-progress</option>
                            <option value={"resolved"}>Resolved</option>
                        </select>
                        <select name="assign" class="select select-bordered w-full max-w-xs">
                            <option disabled selected>{assign}</option>
                            <option value={"level 1"}>Level 1</option>
                            <option value={"level 2"}>Level 2</option>
                            <option value={"level 3"}>Level 3</option>
                        </select>
                        <select name="ETR" class="select select-bordered w-full max-w-xs">
                            <option disabled selected>{ETR}</option>
                            <option value={"1 hr"}>1 hr</option>
                            <option value={"2 hrs"}>2 hrs</option>
                            <option value={"3 hrs"}>3 hrs</option>
                            <option value={"6 hrs"}>6 hrs</option>
                            <option value={"12 hrs"}>12 hrs</option>
                        </select>
                        <input type="text" name='resolveDate' placeholder='Resolve Date 2020-08-11'  class="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="Submit" class="btn btn-primary input input-bordered w-full max-w-xs" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default UpdateModal;