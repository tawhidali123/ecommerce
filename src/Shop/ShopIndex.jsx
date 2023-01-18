import Page from '../Shared/Page'
import ItemList from './ItemList'
import Nav from '../components/Navigation/Nav'

export default function ShopIndex() {
    return (
        <Page name='shop'>
            <Nav />
            <ItemList />
        </Page>
    )
}
