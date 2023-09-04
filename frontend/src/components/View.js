import axios from "axios";
import React,{useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const View = () =>{

    const {id}=useParams();

    const[user,setUser]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetchUser();
    },[id]);


    const fetchUser=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/users/"+id);
            // console.log(result.data.users);
            setUser(result.data.users);
        }catch(err){
            console.log("User Not Found");
        }
    }
    const clicToBackHandler =()=>{
       navigate('/');
    }

    return( <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>User Details</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Full Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{user.id}</th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="container d-flex justify-content-center">
            <div>
                <button className="btn btn-primary" onClick={clicToBackHandler}>Back to Home</button>
            </div>
        </div>
    </div>);
};
export default View;