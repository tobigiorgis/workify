import React from 'react'
import Item from './Item'

const ItemList = ({ detail }) => {
    console.log('itemlist');
    return (
        <ul>
            {detail?.map((item) => (
                <Item {...item} key={item.id}/>
            ))}
        </ul>
    )
}

export default ItemList
