import React from 'react';
import Login from './components/Login';
// import './App.css';

//import logo from './logo.svg';
/*import {FiArrowRight} from "react-icons/fi"*/
/*import Sasi from './Sasi';*/
// import Day from './components/Day';
// import Login from './components/Login';

// import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
// import Form from './components/Form';
// import Formdata from './components/Formdata'
//import  Express  from 'express';
import Ppt from './components/Ppt';

function App() {
  return (
    <div>
 {/* <button className='secondary-button'>
  order now <FiArrowRight/>
  {""}

</button> */}
      {/* <Router>  */}
{/* 
           <Routes>
          <Route path='/' element={<Login/>}/>
           <Route path='Formdata' element={<Formdata/>}/> 
          </Routes>
       </Router> */}

       <Ppt/>
      

      

      
      </div>
        
          /* <Form/> */
          /* <Day/> */
         
      
  );
}

export default App;
