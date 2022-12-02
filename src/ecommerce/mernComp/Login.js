import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react"
import axios from "axios"
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from "react-notifications"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const navigation = useNavigate();
  const login=(e)=>{
    e.preventDefault();
    // Form Validation
    if(!email || !password){
      NotificationManager.error("Please fill all the fields", "", 3000);
      return;
    }else if(password.length < 3){
      NotificationManager.error("Password must be at least 3 characters", "", 3000);
      return;
    }else{

    // axios call
    axios.post(`https://myshopify-api.herokuapp.com/api/user/login`, {
    email: email, 
    password: password
  }).then(res =>{
    localStorage.setItem("token", res.headers.token);
     //console.log(res.headers.token);
    NotificationManager.success(`User ${email} is logged In successfully`, "", 4000); 
    navigation("/")
  }).catch(err =>{
    NotificationManager.error(err.response.data, "", 4000);
     //console.log(err.response.data);
  })
}
  }
  return (
    
                    <div style={{"marginTop": "200px"}}>
<section >
  <div className="px-4 py-5 px-md-5 text-center text-lg-start mt-5" style={{"backgroundColor": "hsl(0, 0%, 96%)"}}>
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-4 fw-normal ls-tight">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>
          <p style={{"color":"hsl(217, 10%, 50.8%)"}}>
          I had all my signs and my branding ready to go and it
           was a<br></br> matter of is this going to work… but people loved it, 
           it <br></br>wasn’t just in my head.
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0 ">
          <div className="card" id="card">
            <div className="card-body py-5 px-md-5">
              <form onSubmit={(e)=> login(e)}>                      
  
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input 
                  type="email"
                   id="email" 
                   onChange={(e)=>setEmail(e.target.value)}
                   value={email}
                  placeholder="Email address"
                   className="form-control" />
                  <label className="form-label text-light" htmlFor="form3Example3">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input type="password"
                   id="password"
                   onChange={(e)=>setPassword(e.target.value)}
                   value={password}
                   placeholder="Password"
                   className="form-control" />
                  <label className="form-label text-light"  htmlFor="form3Example4">Password</label>
                </div>

                
                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-block mb-4" id="btn1">
                  Sign In
                </button>
                <p className='text-light'>Don't have an account? <Link to="/register" className="link-info">Register here</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>             
  )
}

export default Login