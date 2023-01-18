
import Page from '../Shared/Page'
import Nav from '../components/Navigation/Nav'
import CheckoutList from './CheckoutList'

export default function CheckoutIndex() {
    return (
        <Page name='checkout'>
            <Nav />
            <CheckoutList />
        </Page>
    )
}
