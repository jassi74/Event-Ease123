import React from 'react';
import './App.css';
import BsState from './Context/BsState';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

function App() {
  return (
    <div className="App">
     
{/*    
    <BrowserRouter>
      <Routes>
      
        <Route path='/'element={<LoginPage/>}/>
        <Route path='/registration'element={<RegistrationPage/>}/>
        <Route path='/home'element={<BsState><Home/></BsState>}/>
          <Route path='*'element={<div style={{color: "red", margin: "auto",textAlign:"center",fontSize:"40px"}}>Error 404</div>}/>
      </Routes>
      </BrowserRouter> */}
   
    </div>
  );
}

export default App;
