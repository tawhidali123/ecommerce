import React from 'react'
import { Context } from '../AppProvider'
import CheckoutItem from './CheckoutItem'

export default function CheckoutList() {

    let totalDollars = 0

    return (
        <Context.Consumer>
            {
                ({cart}) => (
                    <div>
                        <div style={{textAlign: 'center'}}>
                            <h1>Cart Checkout</h1>
                        </div>
                        <div>
                            {Object.keys(cart).map(cartItem => {
                                totalDollars += (cart[cartItem].product.price * cart[cartItem].quantity)
                            
                                return(
                                    <CheckoutItem 
                                    name={cart[cartItem].product.name} 
                                    price={cart[cartItem].product.price} 
                                    quantity={cart[cartItem].quantity}
                                    />
                                )
                                    
                            })}
                        </div>
                        <div style={{float: 'right', marginRight: '10%'}}>
                            <h1>Total: ${totalDollars}</h1>
                        </div>
                    </div>
                )
            } 
        </Context.Consumer>
    )
}
