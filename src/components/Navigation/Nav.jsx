import { NavDiv } from '../../style/nav'
// import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Context } from '../../AppProvider'

const checkoutPage = 'checkout'
const shopPage = 'shop'

export default function Nav() {
    return (
        <Context.Consumer>
            {
                ({changePage}) => {
                    return (
                        <NavDiv>
        
                            <div>
                                <h5>Logo Trendy</h5>
                            </div>
                            
                            <div>
                                <button onClick={() => changePage(shopPage)}>
                                    Shop
                                </button>
                            </div>
                            <div>
                                <button>Login</button>
                            </div>
                            <div>
                                {/* <HiOutlineShoppingCart 
                                    // style={{width: '55px', height: '55px', margin: '50px 25px'}} 
                                    onClick={() => changePage(checkoutPage)}
                                /> */}
                                <button onClick={() => changePage(checkoutPage)}>View Cart</button>
                            </div>
                        </NavDiv>
                    )
                }
            }
        </Context.Consumer>
        
    )
}
