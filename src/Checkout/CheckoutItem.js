import React from 'react'
import styled from 'styled-components'
import EditBttn from './EditBttn'


const CheckoutItemStyled = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr .5fr .5fr 1fr .5fr;
`

export default function CheckoutItem({id, name, price, quantity, removeItemFromCart}) {
    return (
        <CheckoutItemStyled>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <p>Each: ${price}</p>
            </div>
            <div>
                <p>qty: {quantity}</p>
            </div>
            <div>
                <h4>SubTotal: ${price * quantity}</h4>
            </div>
            <div>
                <EditBttn id={id} quantity={quantity} />

                <button 
                style={{color: 'red'}}
                onClick={() => removeItemFromCart(id)}
                >
                    X
                </button>
            </div>
        </CheckoutItemStyled>
    )
}
