import './Navbar.css';
import {BiHomeAlt} from 'react-icons/bi'
import{AiOutlineUser,AiFillMessage} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {RiCustomerServiceFill} from 'react-icons/ri'
import { useState } from 'react';
const Navbar=()=>{
    const[activeNav,setActiveNav]= useState('#')
    return(
        <>
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><BiHomeAlt/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BsFillBookFill/></a>
            <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><RiCustomerServiceFill/></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><AiFillMessage/></a>
        </nav>
        </>
        );
}
export default Navbar;