import { Container } from 'reactstrap'
import Congrats from '../component/congrats'
import OrderPriceDetails from '../component/orderPriceDetails'

const OrderConfirmationLayout = () => {
  return (
    <>
      <Congrats />
      <Container className="p-2 mt-2 p-md-5">
        <OrderPriceDetails />
      </Container>
    </>
  )
}

export default OrderConfirmationLayout
