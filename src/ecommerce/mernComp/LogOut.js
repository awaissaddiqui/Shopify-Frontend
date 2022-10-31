import React,{useEffect} from 'react'
import "react-notifications/lib/notifications.css";
import {NotificationManager} from "react-notifications"
import { useNavigate } from 'react-router-dom';
const LogOut = () => {
  const navigation = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token) {
       NotificationManager.error("Already Logged out ", "", 3000);
      navigation("/");      
    }
    else{
      localStorage.removeItem("token")
      NotificationManager.warning("Logged out Successfully !!", "", 3000)
      navigation("/")
    }
  })
  return (
    <div>LogOut </div>
  )
}
export default LogOut