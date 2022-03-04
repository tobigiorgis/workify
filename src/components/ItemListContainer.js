import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import data from '../data/data'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [detail, setDetail] = useState([])
    const {byFilter} = useParams()

    useEffect(() => {
            const getDetails = new Promise((resolve) => {
                setTimeout(() => {
                    const myData = byFilter
                    ? data.filter((item) => item.filter === byFilter)
                    : data
                    resolve(myData)
                }, 1000)
            })
    
            getDetails.then((res) => {
                setDetail(res)
            })
        }, [byFilter])

    return (
        <div className='container'>
            <div className='subcontainer'>
            <button className='Pfilter'><Link className='linkPfilter' to='/filter/populars'>POPULARS</Link></button>
            <button className='Sfilter'><Link className='linkSfilter' to='/filter/startups'>STARTUPS</Link></button>
            <button className='Rfilter'><Link className='linkRfilter' to='/filter/remote'>REMOTE</Link></button>
            </div>
            <ItemList detail={detail}/>
            <div className='tobi'>
                <h2 class="glitch">
                    <span aria-hidden="true">by TOBI ™</span>
                    by TOBI ™
                    <span aria-hidden="true">by TOBI ™</span>
                </h2>
            </div>
        </div>
    )
}

export default ItemListContainer
