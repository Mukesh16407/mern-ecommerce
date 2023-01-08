import React from 'react'
import './card.css'
export const Card = ({children}) => {
  return (
    <div className='card'>
        {children}
    </div>
  )
}
