import React,{ } from "react";

import List from './List';
const Home = () =>{

return(
<div className="container">
    <h2 className="w-100 d-flex justify-content-center p-3">
        React Js Laravel 10 Rest Api Project By Afik Tahirov
    </h2>
    <div className="row">
        <div className="col-md-4">
            <h3>Add Your Detail</h3>
            <form>
                <div className="mb-3 mt-3">
                    <label className="form-label">Full Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Full Name"
                        name="name" />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter  Email"
                        name="email" required />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Password:</label>
                    <input type="text" className="form-control" id="password" placeholder="Enter Password"
                        name="password" required />
                </div>

                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
        <div className="col-md-8">
            <List />
        </div>
    </div>
</div>
)
}
export default Home;
