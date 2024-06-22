import React from 'react'
import { clients } from "../../constants";
import './clients.css'
const Clients = () => {
  return (
    <div className='app__clients section__padding'>
<div className="app__clients-logo">
{clients.map(client =>(
  <div className="app__clients-image" key={client.id} >
<img  src={client.logo}/>
</div>
))}
</div>
  
    </div>
  )
}

export default Clients
