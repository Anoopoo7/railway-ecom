import Addresshandler from '../component/addresshandler'
import FinalPriceView from '../component/finalPriceView'
import PaymentSelector from '../component/paymentselector'

const { Container, Row, Col } = require('reactstrap')

const CheckoutLayout = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md="8">
          <Addresshandler />
          <PaymentSelector />
        </Col>
        <Col md="4">
          <FinalPriceView />
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutLayout
