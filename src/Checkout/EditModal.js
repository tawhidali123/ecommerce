import React, {useState} from 'react'
import { Context } from '../AppProvider'
import {ModalStyled} from '../Shared/ModalStyle'


export default function EditModal() {
    let [inputVal, setInputVal] = useState(0)

    const handleClick = (updateItemInCart, openModal, editCartItem) => {
        console.log(editCartItem)
        updateItemInCart(editCartItem, inputVal)
        openModal(editCartItem.id)
    }

    return (
        <Context.Consumer>
            {
                ({editCartItem, openModal, updateItemInCart}) => (
                    <ModalStyled>
                        <div className='modalContent'>
                            <span className='close' onClick={() => openModal()}>&times;</span>
                            <p>
                                Quantity:
                                <input 
                                    type='number' 
                                    placeholder={`${editCartItem.quantity}`} 
                                    onChange={(e) => setInputVal(e.target.value)}
                                />
                            </p>
                            <button 
                            onClick={() => handleClick(updateItemInCart, openModal, editCartItem)}
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
