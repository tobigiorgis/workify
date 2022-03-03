import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ItemList from './ItemList'
import data from '../data/data'

const ItemListContainer = () => {

    const [detail, setDetail] = useState([])
    const byFilter = useParams()

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
            <button className='Pfilter'><Link className='linkPfilter' to='/filter/populars'>POPULARS</Link></button>
            <button className='Sfilter'><Link className='linkSfilter' to='/filter/startups'>STARTUPS</Link></button>
            <button className='Rfilter'><Link className='linkRfilter' to='/filter/remote'>REMOTE</Link></button>
            <ItemList detail={detail}/>
        </div>
    )
}

export default ItemListContainer
