import React from 'react';
import {HomeStyled} from '../style/home'

export default function Home({products}) {
    console.log(products)

    let items = products.map(item => {
        // console.log(item)
        return(
            <div key={item.id}>
                <img src={`${item.image}`}  />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h4>{item.price}</h4>
            </div>
        )
    })

    return (
        <HomeStyled>
            <div className='title'>
                <h1>Shop</h1>
            </div>

            <div className='items'>
                {items}
            </div>        
                   
        </HomeStyled>
    )
}
