import { Context } from '../../AppProvider';
import CheckoutItem from './CheckoutItem';
import EditModal from './EditModal';
import CustomerInfoModal from './CustomerInfoModal';

export default function CheckoutList() {
    return (
        <Context.Consumer>
            {
                ({cart, removeItemFromCart, totalPrice, 
                toggleEditModal, showEditModal, showCustomerInfoModal, toggleCustomerInfoModal}) => (
                    <div>
                        <div style={{textAlign: 'center'}}>
                            <h1>Cart Checkout</h1>
                        </div>

                        <div>
                            {Object.keys(cart).map(cartItem => {
                                return(
                                    <CheckoutItem
                                    id={cart[cartItem].product.id} 
                                    name={cart[cartItem].product.name} 
                                    price={cart[cartItem].product.price} 
                                    quantity={cart[cartItem].quantity}
                                    removeItemFromCart={removeItemFromCart}
                                    toggleEditModal={toggleEditModal}
                                    />
                                )    
                            })}
                        </div>

                        <div style={{float: 'right', marginRight: '10%'}}>
                            <h1>Total: ${totalPrice()}</h1>
                            <button
                            onClick={() => toggleCustomerInfoModal()}
                            >
                                Next &raquo;
                            </button>
                        </div>

                        {showEditModal ? <EditModal /> : null}
                        {showCustomerInfoModal ? 
                        <CustomerInfoModal toggleCustomerInfoModal={toggleCustomerInfoModal} /> : null}
                    </div>
                )
            } 
        </Context.Consumer>
    )
}
