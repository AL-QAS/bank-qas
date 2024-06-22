import React from 'react'
import {GetStarted} from '../../components'
import { discount, robot } from "../../assets";
import './hero.css'
const Hero = () => (
    <div className='app__hero section__padding ' id="home">
      <div className='app__hero-container'>
     <div className="app__hero-discount bg-discount-gradient">
<img src={discount} alt="discount" />
<p>
<span style={{color:'#fff'}}>20%</span> DISCOUNT FOR <span style={{color:'#fff'}}>1 MONTH ACCOUNT</span>
</p>
     </div>

     <div className="app__hero-content">
      <div className="app__hero-content_header">
      <h1>The Next<br/> <span className='text-gradient'>Generation</span> </h1>
     <div className="app__hero-getStarted_btn app__hero-sm-hidden">
     <GetStarted/>
     </div>
      </div>
      <h1>Payment Method.</h1>
      <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
     </div>
     </div>
   
<div className="app__hero-image">
<img src={robot}/>

<div className="pink__gradient pink-light" />
   <div className=" white__gradient  white-light" />
  <div className=" blue__gradient blue-light" />
</div>

<div className="app__hero-getStarted_btn app__hero-sm-display app__hero-lg-hidden">
     <GetStarted/>
     </div>
    </div>
  )


export default Hero
