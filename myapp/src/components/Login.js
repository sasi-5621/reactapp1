import React ,{useState}from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css';




const Login = () => {
  const navigate = useNavigate();
    const[formData,setFormdata]=useState({
        FirstName:"",
        LastName:"",
        Email:"",

    });
    
    const underChange=(e)=>{
        const{name,value}=e.target;
        setFormdata({
            ...formData,
            [name]:value,
        })
    };
    const underSubmit=(e)=>{
        e.preventDefault();
        console.log("Formdata :",formData)
        document.getElementById("registerpagecontainer").style.display="none";
        document.getElementById("mobile-container").style.display="block";
        
     
    }
    const  mobilea={

        display:"none",
    }
    
  return (
    <div className='main-div'>
      <div className='second-div'>
      </div>  
      <form  onSubmit={underSubmit}  >
      <div   id='registerpagecontainer'>
      <div className='email-div'>
        <label htmlFor="FistName">EMAIL</label> <input type="text" name="FirstName" onChange={underChange} value={formData.FirstName} id="FirstName" />
      
        </div>
        <div className='password-div'>
        <label htmlFor="LastName">PASSWORD</label> <input type="text" name="LastName"  onChange={underChange} value={formData.LastName}  id="LastName" />
      
        </div>

       <div className='cap'>
        <h1>FrS2T5q</h1>
        
       </div>

        <div className='captcha-div'>
        <label htmlFor="Email">CAPTCHA</label>   <input type="email" name="Email"  onChange={underChange} value={formData.Email} id="Email" />
     
        </div>
<div>
         <input type="radio" name="gender" value="male"/>male
        <input type="radio" name="gender" value="female"/>female
        </div>



      <div className='submit-div'>
      <button type="submit" onClick={underSubmit} >Submit</button>
      </div>

      <div className='new-user'>
      NEW USER?<a href="SIGN UP PAGE.HTML">  CREATE A ACCOUNT</a>
      </div>
      </div>


      
      </form>
     
      <div id='mobile-container'  style={mobilea}>
      <p>
      <h1 className='org'> WELCOME TO DEEPAK STUDIO</h1>
        PLEASE VERIFY YOUR MAIL : <br></br>{ formData. FirstName} <br></br><br></br><br></br>
        <label htmlFor="otp">Please enter otp </label> <input type="text" name="otp"  onChange={underChange} value={formData.otp}  /><br></br><br></br><br></br>
        <button type="submit" onClick={underSubmit} >Login</button>

        
       
      </p>
      </div>
    </div>
      
  
  );
};

export default Login