import React from 'react'
import {Context} from '../AppProvider'

export default function Page({name, children}) {
    return (
        <Context.Consumer>
            {
                ({page}) => <div>{children}</div>
            }
        </Context.Consumer>
    )
}
