import React from 'react'
import './card.css'
export const Card = ({children,cardClass}) => {
  return (
    <div className={`${cardClass}`}>
        {children}
    </div>
  )
}
