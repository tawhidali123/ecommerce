import React from 'react'
import Page from '../Shared/Page'
import ItemList from './ItemList'
import Nav from '../components/Nav'

export default function ShopIndex() {
    return (
        <Page name='shop'>
            <Nav />
            <ItemList />
        </Page>
    )
}
