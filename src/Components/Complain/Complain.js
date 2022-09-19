import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Complain = () => {
    const [user] = useAuthState(auth);
    console.log(user.email);
    const handleAddComplain = (event) => {


        event.preventDefault();

        const clientMail = event.target.clientMail.value;
        const name = event.target.name.value;
        const type = event.target.type.value;
        const complain = event.target.complain.value;
        const complainEmail = event.target.complainEmail.value;
        const ETR = "2hrs";
        const status = "pending";
        const assign = "Level 1";

        // const complainEmail = 'ashrafata87@gmail.com';


        // const ETR; 


        const ticket = { clientMail, name, type, complain, status, assign, ETR, complainEmail };
        console.log(ticket);

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
                <form onSubmit={handleAddComplain}>
                    <div className="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your email</span>

                        </label>
                        <input type="text" name="clientMail" disabled value={user.email} class="input input-bordered w-96" />

                    </div>
                    <br />
                    <div className="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your company name</span>

                        </label>
                        <input type="text" name="name" placeholder="Type here" class="input input-bordered w-96" />

                    </div>
                    <br />
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
                    <br />
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Concern Team</span>

                        </label>
                        <select name="complainEmail" class="select select-bordered w-96">
                            <option disabled selected>Pick One</option>
                            <option value={"ashrafata87@gmail.com"}>Logical</option>
                            <option value={"auronyanu@gmail.com"}>Physical</option>
                            <option value={"ashrafuleee10@gmail.com"}>Others</option>
                        </select>

                    </div>
                    <br />
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your complain</span>

                        </label>
                        <textarea name="complain" class="textarea textarea-bordered h-24 w-96" placeholder="complain"></textarea>

                    </div>
                    <br />
                    {/* <div className="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Estimated Time to resolve</span>

                        </label>
                        <input type="text" name="etr" disabled value={type === 'logical' ? "2hr" : "12hr"} />

                    </div> */}
                    <br />
                    <input type='submit' class="btn btn-outline btn-primary" value="Submit" />
                </form>

            </div>
        </div>
    );
};

export default Complain;