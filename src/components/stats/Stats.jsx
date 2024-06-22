import React from 'react'
import { stats } from "../../constants"
import './stats.css'
const Stats = () => (
    <div className='app__stats section__padding'>
      <div className="app__stats-contents">
        {stats.map(stat=>(<div key={stat.id} className='app__stats-content'><h4>{stat.value}</h4><p className='text-gradient'>{stat.title}</p><div className='text-gradient app__stats-line'/></div>))}
      </div>
    </div>
  )


export default Stats
