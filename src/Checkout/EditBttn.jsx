import { Context } from '../AppProvider'
import styled from 'styled-components'
import EditModal from './EditModal'

const EditBttnStyled = styled.div`
   
`

export default function EditBttn({id, quantity}) {
    return (
        <Context.Consumer>
            {
                ({openModal, showModal}) => (
                    <EditBttnStyled>
                        <button onClick={openModal}>Edit</button>

                        {showModal ? <EditModal id={id} quantity={quantity} /> : null}
                    </EditBttnStyled>
                    
                )
            }
        </Context.Consumer>
    )
}
