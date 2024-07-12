import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import "./Css/login.css"
const LoginPage = () => {
    const navigate = useNavigate();
const [loginData,setlogindata]= useState({
    username:'',
    password:'',
})


const handleLoginSubmit= async(e)=>{
    e.preventDefault();
     try{
        
        const response = await axios.post('http://localhost:8000/api/login',loginData);
        const{ message }=response.data;
        const status = response.status;
        // console.log(response.status);
        if(status){
            console.log('Login Success');
            navigate('/home');

        }
        else{
            console.log(message);   
        }
     }  
     catch(error){
        alert("Username or password is incorrect");
        console.error('Login error',error);
     }
     setlogindata({
        username:'',
        password:''
     })
}

     const handleLoginChange=(e)=>{
       const{name,value}= e.target;
       
       //to check
       setlogindata((prevData)=>({
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
        
        
        <form onSubmit={handleLoginSubmit}>
        <h1 >Login</h1>
        <div className='username'>
        
            <input type='text'
            name='username'
            placeholder='Username'
            value = {loginData.username}
            onChange={handleLoginChange}
            required/>
         </div>  
         <div className='password'> 
            <input type='password'
            name='password'
            placeholder='Password'
            value = {loginData.password}
            onChange={handleLoginChange}
            required/>
        </div>
            <button type='submit'>Login</button>
            <p>
                Not registered yet?
                <br/>  
                <Link to='/registration'>Register</Link>
            </p>
        </form>
    </div>
    </div>
    
  )
}

export default LoginPage