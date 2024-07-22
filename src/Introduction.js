import React from 'react'
import "./Css/Introduction.css";

const Introduction = () => {
  return (
    
    <div className='intro'>
        <div className='login-btn'> 
            <a href="https://imgbb.com/">
                <img className='logo' src="https://i.ibb.co/0YwVxX5/Screenshot-2024-07-20-at-4-58-16-PM.jpg" alt="movie-ticket-logo-template-design-20029-891-removebg-preview-1" border="0"/>
            </a> 
            <div className='login-button'>
                {/* <a href='google.com'></a> */}
                Login
                <button>Register</button>
            </div>
        </div>
        <div style={{textAlign:"center"}}>
            <h1 >EVENT EASE</h1>
            <p style={{fontSize:'24px'}}>Experience seamless movie ticket booking and seat selection at your fingertips with our intuitive platform!</p>
        </div>
        
        <div className='intro_button'>
            <button className='intro-btn'>Movie</button>
            <button className='intro-btn'>Time</button>
            <button className='intro-btn'>Seat</button>
            <button className='intro-btn'>Last Details</button>
        </div>
        
        <div className='logo_img'> 
            <img src='https://i.ibb.co/7XGhRsp/Designer.png' alt='Seat map'/>
        </div>
    </div>
  )
}

export default Introduction