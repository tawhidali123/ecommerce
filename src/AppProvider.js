import React from 'react'

export const Context = React.createContext()

export class AppProvider extends React.Component {
    state = {
        page: 'shop',
        products: []
    }

    componentDidMount() {
        fetchProducts()
    }

    fetchProducts = () => {
        fetch(`http://localhost:3000/products`)
        .then(resp => resp.json())
        .then(res => {
            this.setState(state.products = res)
        })
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
        
    }
}

