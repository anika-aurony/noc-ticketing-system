import React from 'react';

const Complain = () => {

    const handleAddComplain = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const type = event.target.type.value;
        const complain = event.target.complain.value;
        const status = "pending"
        const ticket = { name, type, complain, status }

        fetch('http://localhost:5000/ticket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ticket),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    }
    return (
        <div  >
            <h1 className=" grid justify-items-center text-2xl">Register Your Complain</h1>
            <div className="grid justify-items-center ">
            <form  onSubmit={handleAddComplain}>
                <div className="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>

                    </label>
                    <input type="text" name="name" placeholder="Type here" class="input input-bordered w-96" />

                </div>
                <br/>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Type of Complain</span>

                    </label>
                    <select name="type" class="select select-bordered w-96">
                        <option disabled selected>Pick one</option>
                        <option>Logical Issue</option>
                        <option>Physical Issue</option>
                        <option>Others</option>

                    </select>

                </div>
                <br/>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Your complain</span>

                    </label>
                    <textarea name="complain" class="textarea textarea-bordered h-24 w-96" placeholder="complain"></textarea>

                </div>
                <br/>
                <input type='submit' class="btn btn-outline btn-primary" value="Submit" />
            </form>

            </div>
        </div>
    );
};

export default Complain;