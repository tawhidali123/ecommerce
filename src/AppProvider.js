import React from 'react'

export const Context = React.createContext()

export class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'shop',
            products: [],
            cart: [],
            changePage : this.changePage,
            addItemToCart: this.addItemToCart,
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

    addItemToCart = (productId, quantity) => {
        console.log(this.state.cart)
        let cart = [...this.state.cart]
        cart.push({id: productId, quantity: quantity})
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

