import Breadcrumbs from '@/widgets/common/breadcrumbs'
import { Col, Container, Row } from 'reactstrap'
import CartItems from '../component/cartItems'
import PriceView from '../component/priceView'

const CartLayout = () => {
  return (
    <Container>
      <Breadcrumbs />
      <Row>
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
