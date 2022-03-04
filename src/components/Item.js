import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({name, image, filter, description, link}) => {
    const newItem = {name, image, filter, description, link}
    return (
        <div className='webDiv'>
            <Link className='toWeb' to={newItem.link}>
                <img src={newItem.image} alt={newItem.name} className='img'></img>
                <li className='name'>{newItem.name}</li>
                <li className='explore'>Find a Job</li>
            </Link>
        </div>
    )
}

export default Item


