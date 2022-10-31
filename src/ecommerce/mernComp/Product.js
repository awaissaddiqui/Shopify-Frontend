import axios from 'axios'
import React, {useEffect, useState} from 'react'
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from "react-notifications"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Product = () => {
  const param = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token) return NotificationManager.error("You need to login first", "",3000)
    axios.get("http://localhost:3001/api/product?pid="+param.pid,{
      headers:{
      token : token
      }
    })
      .then(res =>{
        setProduct(res.data);
        //console.log(res.data);
      })
      .catch(err =>{
        //console.log(err);
      })
  },[]);
  return (
    <React.Fragment>
    <div style={{
      margin: "0px auto", 
      minWidth: "300px",
      height: "100vh",
      padding: "5% 0% 17% 0%",
      backgroundColor: `rgba(0, 50, 46, 0.888)`,
      backgroundAttachment: "fixed",
      }}>
      <div id="productCard">
        <img style={{
          padding: "20px 10px",
        }} src={product.image} width ={300} height={300} alt={product.title} />
        <h2>{product.title}</h2>
        <p style={{
          padding: "0px 50px",

        }}>{product.description}</p>
        <p className='fs-2 text-success'>$ {product.price}</p> 
      <button 
       className='btn btn-lg btn-info px-4'
        style={{
          margin: "30px auto",
          padding: "2px 20px",
        }}
       onClick={() =>{navigate("/products")}}>Back for Products</button>
      
      </div>
    </div>
    </React.Fragment>
  )
}

export default Product