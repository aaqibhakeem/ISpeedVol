import React from 'react'
import { Link } from 'react-router-dom'

function Choice() {
  
  return (
    <div className='choice'>
     <Link to="/hireform" className="btn btn-dark" >We Need Volunteers</Link>
     <Link to="/volunteer" className="btn btn-dark">I Will Volunteer</Link>
    </div>
  )
}

export default Choice