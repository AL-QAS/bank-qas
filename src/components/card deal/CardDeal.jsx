import React from 'react'
import { card } from "../../assets";
import {Button} from '../../components'
import './cardDeal.css'
const CardDeal = () => {
  return (
    <div className='app__cardDeal section__padding'>
    <div className="app__cardDeal-content">
     <h3>Find a better card deal <br/>in few easy steps.</h3>
     <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
     <Button/>
    </div>
    <div className="app__cardDeal-image">
   <img src={card} alt="card" />
    </div>
   </div>
  )
}

export default CardDeal
