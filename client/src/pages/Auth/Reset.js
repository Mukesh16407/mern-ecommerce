import React from 'react'
import resetImg from '../../assets/forgot.png';
import { Card } from '../../Components/card/Card';
import { Link } from 'react-router-dom';


export const Reset = () => {
  return (
    <section className='container auth'>
       <div className='img'>
        <img src={resetImg} alt='ForgotImg'width={"400px"}/>
       </div>
       <Card>
       <div className='form'>
         <h2>RESET PASSWORD</h2>
         <form >
          <input type="text" placeholder='Email' required/>
          
          <button className='btn --btn-block --btn-primary'>RESET PASSWORD</button>
          <div className='links'>
            <p>
            <Link to={"/register"} style={{color:"black"}}>-Register</Link>
            </p>
            <p>
            <Link to={"/login"} style={{color:"black"}}>-Login</Link>
            </p>
          </div>
          
         </form>
         
        
       </div>
       </Card>
    </section>
  )
}
