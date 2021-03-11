import React from 'react'
import { Context } from '../AppProvider'
import CheckoutItem from './CheckoutItem'
import EditModal from './EditModal'

export default function CheckoutList() {

    // let totalDollars = 0

    return (
        <Context.Consumer>
            {
                ({cart, removeItemFromCart, totalPrice, toggleEditModal, showModal}) => (
                    <div>
                        <div style={{textAlign: 'center'}}>
                            <h1>Cart Checkout</h1>
                        </div>

                        <div>
                            {Object.keys(cart).map(cartItem => {
                                return(
                                    <CheckoutItem
                                    id={cart[cartItem].product.id} 
                                    name={cart[cartItem].product.name} 
                                    price={cart[cartItem].product.price} 
                                    quantity={cart[cartItem].quantity}
                                    removeItemFromCart={removeItemFromCart}
                                    toggleEditModal={toggleEditModal}
                                    />
                                )    
                            })}
                        </div>

                        <div style={{float: 'right', marginRight: '10%'}}>
                            <h1>Total: ${totalPrice()}</h1>
                            <button>Checkout</button>
                        </div>

                        {showModal ? <EditModal /> : null}
                    </div>
                )
            } 
        </Context.Consumer>
    )
}
