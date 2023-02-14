import { NavDiv } from './nav-style'
// import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Context } from '../../AppProvider'

const checkoutPage = 'checkout'
const shopPage = 'shop'

export default function Nav() {
    return (
        <Context.Consumer>
            {({changePage}) => (
                <NavDiv>
                <>
                    <div className='logo-icon'>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/7f196111289627.560f53245ebf4.jpg" width="150" height="150" />
                    </div>
                    <div className='shop-title'>
                        <h4>WE are US</h4>
                    </div>
                    <div className='cart-bttn'>
                        <button onClick={() => changePage(checkoutPage)}>&#128722; View Cart</button>
                        <button onClick={() => changePage(shopPage)}>Shop</button>
                    </div>
                </>
                </NavDiv>
            )}
        </Context.Consumer>
        
    )
}
