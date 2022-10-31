import React from 'react'
import { Link } from 'react-router-dom'
import manPic from "../images/man.png"
import home3 from "../images/home3.jpeg"
import mob from "../images/mob.png"
const Home = () => {
  return (
    <React.Fragment>
    <div className="container-fluid about-container" id="homeSection" >
    <div className="container-fluid about-container">
        <div className="container">
            <div className="content row">
                <div className="about-text col-md-6"  id="homeSection2">
                    <h1 className="text-white" style={{"fontFamily":"Helvetica","fontWeight":"bold", "fontSize":"44px" }}>
                      If you can dream<br></br> it, you can sell it<br></br> with Shopify</h1><br></br>
                    <p className="text-white">
                    <p>Build your business here. Take it anywhere.</p>
                    <Link to="/register" className="btn btn-lg btn-primary me-3 fw-bold">Start free trial</Link>
                    </p>
                    <p className="text-white">Try Shopify free , no credit card required. 
                    By entering your email, you agree to receive marketing emails from Shopify.</p>                
                </div>
                <img src={manPic} alt="Home page" className=" col-md-6 pb-3" id="home2"/>
            </div>
        </div>
    </div>
    </div> <br></br> 
    <br></br> 
    <br></br> 
    {/* 2nd section */}
    <div className="container">
      <div >
      <h2 id="discover">Discover why millions of<br></br> entrepreneurs choose Shopify<br></br> to build their business—from<br></br>
       Hello World to IPO.</h2>
      </div>
      <div>
        <img src={home3} alt="Home page2" className="img-fluid col-md-6" id="home3"/>
      </div>
    </div>
    {/* 3rd section */}
    <hr></hr>
    <div className="container-fluid about-container">
        <div className="container" id="section3">
            <div className="content row">
                <div className="about-text col-md-6" >
                    <br></br>
                    <h2 className="">Connect with customers<br></br> everywhere</h2>
                    <p className="fw-normal">
                    <br></br>
                    Sell online, in person, or both with the marketing<br></br>tools, 
                    social integrations, and sales channels you<br></br> need to get your products 
                    in front of customers—and <br></br>out the door.
                    </p>
                    <h4 className='text-success'>Marketing made easy  </h4>

                </div>
                <img  src={mob}  alt="marketing" className="img-fluid col-md-6" id='marketing'/>
            </div>
        </div>
        </div>
        {/* Last Section  */}
        <div className='text-center'>
          <h1>
          Grow your business here
          </h1>
          <p className='fw-normal'>
          Whether you want to sell products down the street or around the world, we have all the tools you need.
          </p>
          <Link to="/register" className="btn btn-lg btn-success me-3 fw-bold">Get Started</Link>
        </div>

    <footer className="page-footer font-small bg-dark mt-5" style={{"mariginTop":"30px","paddingTop":"0px"}}>
      <div className="footer-copyright text-center py-3 text-white">© 2022 Copyright:<br></br>
       <h4 className='text-danger'>Awais Saddiqui</h4>
  </div>
      </footer>
    </React.Fragment>
  )
}
export default Home
// rgb(0, 50, 46)