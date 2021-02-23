import React from 'react'
import { Context } from '../AppProvider'

export default function CheckoutList() {
    return (
        <Context.Consumer>
            {
                ({products, cart}) => (
                    <div>
                        {cart.map(item => <h1>{products[item.id].name}</h1>)}
                    </div>
                )
            } 
        </Context.Consumer>
    )
}
