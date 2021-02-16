import React from 'react';
import {HomeStyled} from '../style/home'
import Page from '../Shared/Page'

export default function Home({products}) {
    console.log(products)

    let items = products.map(item => {
        // console.log(item)
        return(
            <div key={item.id} style={{margin: '10px'}}>
                <div>
                    <img src={`${item.image}`} style={{height: '100%', width: '100%'}}  />
                </div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h4>{item.price}</h4>
            </div>
        )
    })

    return (
        <Page name='shop'>
            <HomeStyled>
                <div className='title'>
                    <h1>Shop</h1>
                </div>

                <div className='items'>
                    {items}
                </div>        
                    
            </HomeStyled>
        </Page>
    )
}
