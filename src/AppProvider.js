import React from 'react'

export const Context = React.createContext()

export class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'shop',
            products: []
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

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
        
    }
}

