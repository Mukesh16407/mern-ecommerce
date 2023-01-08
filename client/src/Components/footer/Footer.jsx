import React from 'react'
import './footer.css'
export const Footer = () => {


  const date = new Date();
  const year = date.getFullYear()
  return (
    <div className='footer'>
      &copy;{year} all Rights Reserved
    </div>
  )
}
