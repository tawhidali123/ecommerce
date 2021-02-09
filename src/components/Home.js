import React from 'react';
import {HomeStyled} from '../style/home'

export default function Home({products}) {
    console.log(products)

    let items = products.map(item => {
        console.log(item)
        return(
            <div>{item.name}</div>
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
