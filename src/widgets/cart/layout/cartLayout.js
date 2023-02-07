import { Col, Container, Row } from 'reactstrap'
import CartItems from '../component/cartItems'
import PriceView from '../component/priceView'

const CartLayout = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col md="8">
          <CartItems />
        </Col>
        <Col md="4">
            <PriceView/>
        </Col>
      </Row>
    </Container>
  )
}

export default CartLayout
