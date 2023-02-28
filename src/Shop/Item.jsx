import {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


// eslint-disable-next-line no-unused-vars
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
                <Link to={{pathname: 'item', search: `?id=${product.id}`}}>
                    <img src={`${product.image}`} className='w-100 db'  />
                </Link>
            </div>
            <div>
                <h2 className='bg-light-yellow '>{product.name}</h2>
                <p className=''>{product.description}</p>
                <h4 className=''>$ {product.price}</h4>
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
