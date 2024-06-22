import React from 'react'
import{arrowUp} from '../../assets'
import './getStarted.css'
const GetStarted = () => {
  return (
    <div className="app__hero-getStarted bg-blue-gradient">
    <div className="app__hero-getStarted_content">
      <p className="text-gradient app__hero-btn_img">Get <img src={arrowUp}/><br/>Started</p>
      
    
    </div>
  </div>
  )
}

export default GetStarted
