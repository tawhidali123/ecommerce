import React from 'react'
import {ModalStyled} from '../Shared/ModalStyle'

export default function CustomerInfoModal({toggleCustomerInfoModal}) {
    return (
        <ModalStyled>
            <div className='modalContent'>
                <span 
                className='close' 
                style={{float: 'right'}}
                onClick={() => toggleCustomerInfoModal()}
                >
                    &times;
                </span>

                <div>
                    <h2>Name:</h2>
                    <input type='text' />
                </div>

                <div>
                    <h2>Address:</h2>
                    <input type='text' />
                </div>

                <div>
                    <h2>Email:</h2>
                    <input type='text' />
                </div>

                <div>
                    <h2>Phone:</h2>
                    <input type='text' />
                </div>

                <div>
                    <br />
                    <button>Proceed To Payment &raquo;</button>
                </div>
            </div>
        </ModalStyled>
    )
}
