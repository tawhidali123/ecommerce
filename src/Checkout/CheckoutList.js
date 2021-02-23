import React from 'react'
import { Context } from '../AppProvider'

export default function CheckoutList() {
    return (
        <Context.Consumer>
            {
                ({products, cart}) => (
                    <div>
                        {cart.map(item => <h1>{item.product.name}</h1>)}
                    </div>
                )
            } 
        </Context.Consumer>
    )
}
