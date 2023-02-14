import React, {useState} from 'react';
import { Context } from '../../AppProvider';
import {ModalStyled} from '../../Shared/ModalStyle';


export default function EditModal() {
    let [inputVal, setInputVal] = useState(0)

    const handleClick = (updateItemInCart, toggleEditModal, cartId) => {
        updateItemInCart(cartId, inputVal)
        toggleEditModal()
    }

    return (
        <Context.Consumer>
            {
                ({cartId, toggleEditModal, updateItemInCart, cart}) => (
                    <ModalStyled>
                        <div className='modalContent'>
                            <span className='close' onClick={() => toggleEditModal()}>&times;</span>
                            <h3>{cart[cartId].product.name}</h3>
                            <div>
                                <p>Quantity:</p>
                                <input 
                                    type='number' 
                                    placeholder={`${cart[cartId].quantity}`} 
                                    onChange={(e) => setInputVal(e.target.value)}
                                />
                                <h3>$ {cart[cartId].product.price}</h3>
                            </div>
                            <button 
                            onClick={() => handleClick(updateItemInCart, toggleEditModal, cartId)}
                            >
                                Update
                            </button>
                        </div>
                    </ModalStyled>
                )
            }
        </Context.Consumer>
    )
}
