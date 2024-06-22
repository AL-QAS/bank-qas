import React from 'react'
import {Button} from '../../components'
import './cta.css'
const CTA = () => {
  return (
    <div className='app__cta section__padding'>
      <div className="app__cta-content bg-black-gradient">
        <div className="app__cta-content_info">
        <h3>Let’s try our service now!</h3>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="app__cta-btn">
      <Button/>
      </div>
      </div>
    </div>
  )
}

export default CTA
