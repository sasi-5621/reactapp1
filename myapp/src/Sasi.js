import React from 'react'
import {HiHome} from "react-icons/hi";
import {FcAbout} from "react-icons/fc";
import {IoIosContact} from "react-icons/io";
import {RiLogoutCircleFill} from "react-icons/ri";
import {AiOutlineSearch} from "react-icons/ai";
import App from './App';
const Sasi = () => {
  return (

    <div>
      
      
      <div className='search1'>
        <input type='text'/>
        <button className='search2'>
        <AiOutlineSearch/>
  {""}
  </button>

      </div>
    

    <div className='div1'>
      <ul>
        <li>
          <div className='home2'>
         <HiHome/>
  {""}
  </div>
          home</li>
        <li>
        <div className='home1'>
        <FcAbout/>
        {""}
        </div>
          abought</li>
          <li>
          <div className='home1'>
          <IoIosContact/>
        {""}
        </div>
            profile</li>
          <li>
          <div className='home1'>
          <RiLogoutCircleFill/>
        {""}
        </div>
            logout</li>
      </ul>
      <hr className='line'></hr>
    </div>
    </div>
  )
}

export default Sasi

