import React from 'react'
import loaderImg from "../../assets/loader.gif";

export const Loader = () => {
  return (
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>
  )
}
