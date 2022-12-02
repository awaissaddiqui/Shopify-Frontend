import React, { useState } from 'react'
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from "react-notifications"
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [address, setAddress] = useState("");

    const navigation = useNavigate()
  const signUp=(e)=>{
    e.preventDefault();
    // form validation
    if(!name || !email || !password || !address){
      NotificationManager.warning("Please fill all the fields", "", 3000);
      return;
    }else if(name.length<3){
      NotificationManager.warning("Name must be at least 3 characters", "", 3000);
      return;
    }else if(password.length<5){
      NotificationManager.warning("Password must be at least 5 characters", "", 3000);
      return;
    }else if(address.length<8){
      NotificationManager.warning("Address must be at least 8 characters", "", 3000);
      return;
    }else{
    // axios call
    axios.post("https://myshopify-api.herokuapp.com/api/user/register", {
    name: name,
    email: email, 
    password: password,
    address: address
  }).then((res) =>{
     NotificationManager.success(`User ${res.data.email} is register successfully`, "", 3000);
     navigation("/login")
   // console.log(res);
  }).catch((err) =>{
    NotificationManager.error(err.response.data, "", 3000);
    //console.log(err.response.data);

  })
}
  }
  return (

  <div className="vh-40" style={{"marginTop":"60px"}} id="login">
  <section className="vh-40"  style={{"backgroundImage": "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}} >
  <div className="mask d-flex align-items-center h-100 " id="gradient-custom-3">
    <div className="container h-30">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{"borderRadius": "20px", "paddingBottom":"40px", "marginTop":"60px","marginBottom":"60px"}}>
            <div className="card-body p-5" >
              <h2 className=" text-center mb-1">Create an account</h2>

              <form onSubmit={(e) => signUp(e)}>

                <div className="form-outline mb-4">
                  <input type="text" id="name" onChange={(e) =>setName(e.target.value)} 
                  placeholder="Full name" value={name} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} 
                  placeholder="Email address" value={email} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="password" onChange={(e)=> setPassword(e.target.value)} 
                 placeholder="Password" value={password} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="address" onChange={(e)=> setAddress(e.target.value)} 
                 placeholder="Address" value={address} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example5cg">Address</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="terms" />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in <u>Terms of service</u>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-success btn-block btn-lg text-body " id="gradient-custom-4">Register</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"
                   id='login-link' className="fw-bold text-body"><br></br><u>Login here</u></Link></p>

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

export default Register