/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { NavDiv } from './nav-style'
import { Context } from '../../AppProvider'
import logo from '../../assets/Work.png';

const checkoutPage = 'checkout'
const shopPage = 'shop'

export default function Nav() {
    const { changePage } = useContext(Context);

    const handleShopClick = (e) => {
        e.preventDefault();
        changePage(shopPage);
    }

    const handleCartClick = (e) => {
        e.preventDefault();
        changePage(checkoutPage);
    }
    return(
        <NavDiv>
            <header className="bg-white black-80 tc pv4 avenir">
                <a href="" class="bg-black-80 ba b--black dib pa3 w2 h2 br-100"></a>
                {/* <img src={logo} className='w-20 h-10 mb0' /> */}
                <h1 className="mt2 mb0 f1 b">Ecommerce</h1>
                <h2 className="mt2 mb0 f6 fw4 ttu tracked">We sell items subtext</h2>
                <div className="bt bb tc mw7 center mt4">
                    <a className="f6 f5-l link bg-animate black-80  dib pa3 ph4-l" onClick={handleShopClick}>
                        Shop
                    </a>
                    <a className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l" onClick={handleCartClick}>
                        Cart
                    </a>
                    <a className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l" href="/shop">
                        Shop
                    </a>
                    <a className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l" href="/about">About</a>
                    <a className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l" href="/contact">Contact</a>
                </div>
            </header>
        </NavDiv>
    );
}