import React from 'react'
import { quotes} from "../../assets";
import './feedbackCard.css'
const FeedbackCard = ({content,name,title,img}) => {
  return (
    <div className='app__feedbackCard feedback-card'>
      <img src={quotes} alt="quotes" className="quotes" />
      <p className="app__feedback-p">{content}</p>
      <div className="app__feedbackCard-profile">
        <img src={img} alt="img" />
        <div className="app__feedbackCard-profile_info">
          <p className='app__feedbackCard-profile_info-p1'>{name}</p>
          <p className='app__feedbackCard-profile_info-p2'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
