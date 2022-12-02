import React from 'react'
import { BrowserRouter as Router , Routes , Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import LogOut from './LogOut'
import Product from './Product'
import Products from './Products'
import About from './About'
import Error from './Error'
import logo from './../images/logo.png'
import './style.css'
import { NotificationContainer } from 'react-notifications'
import { Nav } from 'react-bootstrap'

const App = () => {
  return (
        <div>
    <Router>
      <NotificationContainer/>
            {/* Navabar */}
          <Nav className="navbar navbar-expand-lg fixed-top "> 
        <div className="container-fluid"  id="bg_color">

        {/* Logo */}
        <Link className="navbar-brand me-2" to="/">
        <img src={logo} height={54} width={130} alt="MDB Logo" className='rounded ms-5' style={{"marginTop": "-1px"}} />
        </Link>
  
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"  data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation" >
    </button>
    <div className="collapse navbar-collapse">
    {/* Navbar items */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
          <Link className="nav-link text-white" id='home' to="/">Home</Link>
          <Link className="nav-link text-white" id='products' to="/products">Products</Link>
          <Link className="nav-link text-white" id='about' to="/about">About</Link>
      </ul>

      <div className=" align-items-center ">
        <Link to="/login" id='login' className="btn btn-lg btn-info me-3 fw-bold ">
          Login
        </Link>
        <Link to="/register" id='register' className="btn btn-lg btn-primary me-3 fw-bold">
          Sign up for free
        </Link>
        <Link id='logout' className="btn btn-lg btn-danger px-3 fw-bold" to="/logout" >LogOut</Link>
      </div>
    </div>
 
  </div>
</Nav>
             {/* Navabar */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<LogOut/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/product/:pid" element={<Product/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
      
    </Router>       
    </div>
  )
}

export default App