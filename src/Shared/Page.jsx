import {Context} from '../AppProvider'

export default function Page({name, children}) {
    return (
        <Context.Consumer>
            {
                ({page}) => {
                    if(page !== name){
                        return null
                    }
                    return <div>{children}</div>
                }
            }
        </Context.Consumer>
    )
}
