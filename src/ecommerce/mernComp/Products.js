import React,{useEffect, useState} from 'react'
import axios from 'axios'
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from "react-notifications"
import ProductCard from './ProductCard';
const Products = () => {
  const [products, setProducts] =useState([]); 
  
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token) return NotificationManager.error("You need to Login First !!", "", 4000)
    axios.get("https://myshopify-api.herokuapp.com/api/products",{
      headers:{
        token : token 
      }
    })
    
     .then(res=>{
      setProducts(res.data)
      // console.log(res.data);
     }).catch(err =>{
      NotificationManager.error(err, "", 4000)  
     // console.log(err);  
     })
   },[])
  return (
    <div>
       <div className="container1">
            <div className="products-wrapper">
                <div className="products">
               
                    {products.map((p) => (
                        <ProductCard id={p.id} title={p.title} url={p.image} key={p.id} />
                    ))}
                </div>
                
            </div>
        </div>









      {/* {
       products.length>0 && products.map(prod=>{
          return (
            <div style={{marginTop: "300px", marginLeft:"100px"}} key={prod.title}>
              <Link to={"/product/"+prod.id}> {prod.title}</Link>
              <p><img src={prod.image} width ={200} height={200} alt={prod.title} /></p>
            </div>
          )
        })
      } */}
    </div>
  )
}

export default Products