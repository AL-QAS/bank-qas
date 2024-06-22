import React from 'react'
import { feedback } from "../../constants";

import {FeedbackCard} from "../../components";
import './testimonials.css'
const Testimonials = () => {
  return (
    <div className='app__testimonials section__padding ' id="clients">
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40 app__testimonials-light" />
    <div className="app__testimonials-top">
      <div>
      <h3>What people are<br className='app__testimonials-sm-hidden'/> saying about us</h3>
      </div>

        
      <div>
      <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      
       
     
      </div> 
<div className="app__testimonials-cards">
  {feedback.map((card)=>(<FeedbackCard key={card.id} {...card} />))}
</div>

    </div>
  )
}

export default Testimonials
