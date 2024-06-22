import React from 'react'

import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";

import './footer.css'
const Footer = () => {
  return (
    <div className='app__footer section__padding'>
    
    <div className="app__footer-content">
    <div className="app__footer-content_header">
      <img src={logo} alt="logo" />
      <p>A new way to make the payments easy, reliable and secure.</p>
    </div>
    <div className="app__footer-content_links-container">
   {footerLinks.map((footerLink,index)=>( <div className="app__footer-content_links" key={index}>
    
      <h4>{footerLink.title}</h4>
      <ul>
      {footerLink.links.map((linkss,index)=> (<li key={index}><a href={linkss.link}>{linkss.name}</a></li>))}
    </ul>
   </div>))}
    </div>
    </div>
   
    <div className="app__footer-social-links">
   <p> Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
   <div className="app__footer-social-icons">
    {
      socialMedia.map(media=>(<a href={media.link} key={media.id}><img src={media.icon} alt='icon' /></a>))
    }
   </div>
    </div>
    </div>

  )
}

export default Footer
