import React from 'react';
import {HomeStyled} from '../style/home'
import {Context} from '../AppProvider'
import Item from './Item'

export default function ItemList() {
    return (
        <Context.Consumer>
            {
                ({products, addItemToCart}) => {
                    return (
                        <HomeStyled>
                            <div className='title'>
                                <h1>Shop</h1>
                            </div>

                            <div className='items'>
                                {products.map(product => <Item 
                                product={product} 
                                key={product.id} 
                                addItemToCart={addItemToCart} 
                                />)}
                            </div>        
                                
                        </HomeStyled>
                    )
                }
            }
        </Context.Consumer>
    )
}