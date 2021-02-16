import React from 'react';
import {HomeStyled} from '../style/home'
import {Context} from '../AppProvider'
import Item from './Item'

export default function ItemList() {

    // let items = products.map(item => {
    //     // console.log(item)
    //     return(
    //         <div key={item.id} style={{margin: '10px'}}>
    //             <div>
    //                 <img src={`${item.image}`} style={{height: '100%', width: '100%'}}  />
    //             </div>
    //             <h2>{item.name}</h2>
    //             <p>{item.description}</p>
    //             <h4>{item.price}</h4>
    //         </div>
    //     )
    // })

    const displayItem = (products) => {
        products.map(product => <Item product={product} />)
    }

    return (
        <Context.Consumer>
            {
                ({products}) => {
                    console.log(products)
                    {/* debugger */}
                    return (
                        <HomeStyled>
                            <div className='title'>
                                <h1>Shop</h1>
                            </div>

                            <div className='items'>
                                {displayItem(products)}
                            </div>        
                                
                        </HomeStyled>
                    )
                }
            }
        </Context.Consumer>
    )
}