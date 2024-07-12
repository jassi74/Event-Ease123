import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Css/login.css"

const RegistrationPage = () => {
    const [RegisterData,setRegisterdata]= useState({
        username:'',
        password:'',
    })
    
   
    const handleRegisterSubmit= async(e)=>{
        e.preventDefault();
         try{
            const response = await axios.post('http://localhost:8000/api/register',RegisterData);
            const{ message }=response.data;
            const status = response.status;
            //  console.log("hey how are you");
            if(status){
                console.log('Register Success');

            }
            else {
                console.log(message);   
            }
         }  
         catch(error){  
            alert("Username alredy in use");
            console.error('Register error',error);
         }
         setRegisterdata({
            username:'',
            password:''
         })
    }
    
         const handleRegisterChange=(e)=>{
           const{name,value}= e.target;
           
           //to check
           setRegisterdata((prevData)=>({
            ...prevData,
            [name]:value
           }))
         }
  return (
    <div className='login'>
<div className='image' > 
        <div>
        <a href="https://imgbb.com/">
            <img src="https://i.ibb.co/GtVmySL/movie-ticket-logo-template-design-20029-891-removebg-preview-1.png" alt="movie-ticket-logo-template-design-20029-891-removebg-preview-1" border="0"/>
        </a> 
        </div>
        <div className='namelogo'>BookMyShow</div>
            
        </div>
    <div className='LoginPage'>
       
        <form onSubmit={handleRegisterSubmit}>
        <h1>Registration</h1>
        <div className='username'>
        <input type='text'
            name='username'
            placeholder='New Username'
            value = {RegisterData.username}
            onChange={handleRegisterChange}
            required/>
           </div>
           <div className='password'>  
            <input type='password'
            name='password'
            placeholder='Set Password'
            value = {RegisterData.password}
            onChange={handleRegisterChange}
            required/>
            </div>
            <button type='submit'>Register</button>
            <p>
                Already user?
                <br/>
                <Link to='/'>Login</Link>
            </p>
        </form>
    </div>
    </div>
  )
}

export default RegistrationPage