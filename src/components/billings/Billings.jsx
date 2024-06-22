import React from 'react'
import { apple, bill, google } from "../../assets";
import './billings.css'
const Billings = () =>  (
  <div className='app__billings section__padding' id="products">
  <div className="app__billings-content">
   <h3>Easily control your<br/> billing & invoicing.</h3>
   <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
   <div className="app__billings-logo">
<img src={apple} alt="apple" />
<img src={google} alt="google" />
   </div>
  </div>
  <div className="app__billings-image">
 <img src={bill} alt="bill" />
 <div className="  bi" />
      <div className="  bill" />
  </div>
 </div>
  )


export default Billings
