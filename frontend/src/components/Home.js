import React,{ useState } from "react";

import List from './List';
import axios from "axios";
const Home = () =>{

    const [userField,setUseField] = useState({
        name:"",
        email:"",
        password:""
    })

  const changeUserFieldHandler = (e)=>{
    setUseField({
        ...userField,
        [e.target.name]: e.target.value
    });
    // console.log(userField);
  }  

  const [loading,setLoading]=useState();

  const onSubmitChange = async (e)=>{
    e.preventDefault();
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/addnew',userField);
        // console.log(response);
        setLoading(true);
    }catch(err){
        console.log("Something Wrong")
    }

  }
  if(loading){
    return <Home/>
  }

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
                        name="name" onChange={e=>changeUserFieldHandler(e)} required />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter  Email"
                        name="email" onChange={e=>changeUserFieldHandler(e)} required />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Password:</label>
                    <input type="text" className="form-control" id="password" placeholder="Enter Password"
                        name="password" onChange={e=>changeUserFieldHandler(e)} required />
                </div>

                <button type="submit" className="btn btn-primary" onClick={e=>onSubmitChange(e)}>Add User</button>
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
