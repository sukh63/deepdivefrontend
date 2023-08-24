import React,{useState,useEffect} from 'react'
import "./Component.css"
import {useHistory} from 'react-router-dom'
const Logout = () => {
    const API_Key=process.env.REACT_APP_API_KEY;
    console.log(API_Key,"apikey")
    const history = useHistory();
  
        useEffect (() =>{
    
            fetch(`${API_Key}/logout`,{
                method:'GET',
                headers:{
                    Accept: 'application/json',
                    mode:"cors",
                            'Access-Control-Allow-Origin':`${API_Key}`, 
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Credentials': true
                  },
                  credentials:"include",
               
            }).then((res)=>{
               
    history.push('/Login')
    if(res.status !==200){
        const Error = new Error (res.Error);
        throw Error;
    }
            }).catch((err) =>{
    
    

            })
    
        });
  return (
    <></>
  )
}

export default Logout