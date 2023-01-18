import React, {useState} from 'react'
import styled from 'styled-components'


const ItemStyled = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    margin: 10px;
    border: 1px solid gray;
    border-radius: 12.5px;
    padding: 10px;
`

export default function Item({product, addItemToCart}) {
    const [quantity, setQuantity] = useState(1)

    return (
        <ItemStyled>
            <div>
                <img src={`${product.image}`} style={{height: '100%', width: '100%'}}  />
            </div>
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h4>$ {product.price}</h4>
                <input 
                    placeholder='Quantity' 
                    onChange={e => setQuantity(e.target.value)}
                />
                <button 
                    onClick={() => addItemToCart(product, quantity)}
                    style={{backgroundColor: 'blue', color: 'white'}}
                >
                    Add To cart +
                </button>
            </div>
            
        </ItemStyled>
    )
}
