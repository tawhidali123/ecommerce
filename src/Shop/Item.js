import React, {useState} from 'react'

export default function Item({product, addItemToCart}) {
    const [quantity, setQuantity] = useState(1)

    return (
        <div style={{margin: '10px'}}>
            <div>
                <img src={`${product.image}`} style={{height: '100%', width: '100%'}}  />
            </div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
            <input 
                placeholder='Quantity' 
                onChange={e => setQuantity(e.target.value)}
            />
            <button onClick={() => addItemToCart(product.id, quantity)}>
                Add To cart +
            </button>
        </div>
    )
}
