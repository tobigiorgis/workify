import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({name, image, filter, description, link}) => {
    const newItem = {name, image, filter, description, link}
    const redirect = () => {
        window.location.href = newItem.link
    }
    return (
        <div className='webDiv' onClick={redirect}>
                <img src={newItem.image} alt={newItem.name} className='img'></img>
                <li className='name'>{newItem.name}</li>
                <li className='explore'>Find a Job</li>
        </div>
    )
}

export default Item


