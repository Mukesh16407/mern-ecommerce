import React from 'react'
import './auth.css'
import loginImg from '../../assets/login.png'
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { Card } from '../../Components/card/Card';

export const Login = () => {

  
  return (
   <section className='container auth'>
       <div className='img'>
        <img src={loginImg} alt='LoginImg'width={"400px"}/>
       </div>
       <Card>
       <div className='form'>
         <h2>LOGIN</h2>
         <form >
          <input type="text" placeholder='Email' required/>
          <input type="password" placeholder='Password'required/>
          <button className='btn --btn-block --btn-primary'>Login</button>
          <div className='links'>
            <Link to={"/reset"} style={{color:"black"}}>Reset Password</Link>
          </div>
          <p style={{color:"black"}}>--or--</p>
         </form>
         <button className='btn --btn-block --btn-danger'>
         <GoogleIcon/>Login With Google
         </button>
         <span className='register'><p  style={{color:"black"}}>Don't have an Account?</p>
         <Link to={"/register"} style={{color:"black"}}>Register</Link>
         </span>
       </div>
       </Card>
    </section>
  )
}
