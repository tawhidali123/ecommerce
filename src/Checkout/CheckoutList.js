import React from 'react'
import { Context } from '../AppProvider'

export default function CheckoutList() {
    return (
        <Context.Consumer>
            {
                ({cart}) => (
                    <div>
                        <div>
                            <h1>Cart Checkout</h1>
                        </div>
                        <div>
                            {Object.keys(cart).map(cartItem => (
                                    <div>
                                        <h2>{cart[cartItem].product.name}</h2>
                                        <p>Each: ${cart[cartItem].product.price}</p>
                                        <small>qty: {cart[cartItem].quantity}</small>
                                        <h4>Total: ${cart[cartItem].product.price * cart[cartItem].quantity}</h4>
                                    </div>
                                    
                                )
                            )}
                        </div>
                    </div>
                )
            } 
        </Context.Consumer>
    )
}
