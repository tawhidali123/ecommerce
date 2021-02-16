import React from 'react'

export default function Item({product}) {
    return (
        <div style={{margin: '10px'}}>
            <div>
                <img src={`${product.image}`} style={{height: '100%', width: '100%'}}  />
            </div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
        </div>
    )
}
