import React from 'react'
import { Navbar , Hero,Stats,Business,Billings,CardDeal,Testimonials,Clients,CTA,Footer} from './components'
import './App.css'
const App = () => {
  return (
    <div>
   <Navbar/>
     <Hero/>
     <Stats/>
     <Business/>
     <Billings/>
     <CardDeal/>
     <Testimonials/>
     <Clients/>
     <CTA/>
     <Footer/>
  </div>
  )
}

export default App
