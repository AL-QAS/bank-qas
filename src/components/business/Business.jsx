import React from 'react'
import { features } from "../../constants";
import {Button} from '../../components'
import './business.css'

const FeatureCard = ({icon,title,content,index}) =>(
  
  <div className="app__business-featureCard " id="features">
    <div className="app__business-featureCard_image">
      <img src={icon} alt="icon" />
    </div>
    <div className="app__business-featureCard_content">
      <div className="app__business-featureCard_content-inner">
        <h4>{title}</h4>
        <p className={`${index === index.length-1 ? "bg-black-gradient": ""}`}>{content}</p>
      </div>
    </div>
  </div>
)
 
const Business = () => {
  return (
    <div className='app__business section__padding'>
     <div className="app__business-content">
      <h3>You do the business, <br/>we’ll handle the money.</h3>
      <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button/>
     </div>
     <div className="app__business-features">
    {features.map((feature,index)=>(<FeatureCard key={feature.id} {...feature} index={index}/>))}
     </div>
    </div>
  )
}

export default Business
