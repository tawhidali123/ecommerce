import React from 'react'

export const Context = React.createContext()

export class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'shop',
            products: [],
            cart: {},
            showModal: false,
            changePage : this.changePage,
            addItemToCart: this.addItemToCart,
            removeItemFromCart: this.removeItemFromCart,
            totalPrice: this.totalPrice,
            toggleEditModal: this.toggleEditModal,
            updateItemInCart: this.updateItemInCart
        }
    }
    

    componentDidMount() {
        this.fetchProducts()
    }

    fetchProducts = () => {
        fetch(`http://localhost:3000/products`)
        .then(resp => resp.json())
        .then(res => {
            this.setState(this.state.products = res)
        })
    }

    changePage = (page) => {
        return this.setState({page})
    }

    addItemToCart = (product, quantity) => {
        let cart = {...this.state.cart}
        product.id === cart[product.id] ? 
        cart[product.id] = {productId: product.id, quantity: quantity, product: product} :
        cart[product.id] = {productId: product.id, quantity: quantity, product: product}
        return this.setState({cart})
    }

    removeItemFromCart = (productId) => {
        let cart = {...this.state.cart}
        delete cart[productId]
        return this.setState({cart})
    }

    totalPrice = () => {
        let cart = {...this.state.cart}
        let total = 0
        let amount = Object.keys(cart).map(cartItem => {
            total += (cart[cartItem].product.price * cart[cartItem].quantity)
        })
        return total
    }

    toggleEditModal = (productId) => {
        return this.setState({showModal: !this.state.showModal, cartId: productId})
    }

    updateItemInCart = (productId, updateAmount) => {
        let cart = {...this.state.cart}
        cart[productId].quantity = updateAmount
        return this.setState({cart})
    }
    
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
        
    }
}

