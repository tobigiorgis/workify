import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Link className='linkHome' to='/'>
            <div className='nav'>
            <h1 class="glitch">
                <span aria-hidden="true">[ Workify ]</span>
                [ Workify ]
                <span aria-hidden="true">[ Workify ]</span>
            </h1>
            </div>
            <div className='divSwag'><p className='textSwag'> YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB! - YOU NEED TO GET A JOB!</p></div>
        </Link>
    )
}

export default Navbar
