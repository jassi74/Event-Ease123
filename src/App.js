import React from 'react';
import './App.css';
import BsState from './Context/BsState';
// import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
// import LoginPage from './LoginPage';
// import RegistrationPage from './RegistrationPage';
import Introduction from './Introduction';

function App() {
  return (
    <div className="App">
     <Introduction/>
     {<BsState><Home/></BsState>}
       
    {/* <BrowserRouter>
      <Routes>
      <Route path='/Event-Ease123'element={<LoginPage/>}/>
        <Route path='/Event-Ease123'element={<LoginPage/>}/>
        <Route path='/registration'element={<RegistrationPage/>}/>
        <Route path='/home'element={<BsState><Home/></BsState>}/>
          <Route path='*'element={<div style={{color: "red", margin: "auto",textAlign:"center",fontSize:"40px"}}>Error 404</div>}/>
      </Routes>
      </BrowserRouter> */}
   
    </div>
  );
}

export default App;
