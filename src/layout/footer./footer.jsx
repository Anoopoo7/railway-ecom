/* eslint-disable @next/next/no-img-element */
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
  return (
    <div className="footer-custom">
      <Container>
        <Row>
          <Col lg="3" md="6" xs="12" className="mt-5">
            <h6>Get to Know Us</h6>
            <smal>Lorem, ipsum dolor.</smal>
            <br />
            <smal>Lorem, ipsum .</smal>
            <br />
            <smal>Lorem, dolor.</smal>
            <br />
          </Col>
          <Col lg="3" md="6" xs="12" className="mt-5">
            <h6>Get to Know Us</h6>
            <smal>Lorem, ipsum dolor.</smal>
            <br />
            <smal>Lorem, ipsum .</smal>
            <br />
            <smal>Lorem, dolor.</smal>
            <br />
          </Col>
          <Col lg="3" md="6" xs="12" className="mt-5">
            <h6>Get to Know Us</h6>
            <smal>Lorem, ipsum dolor.</smal>
            <br />
            <smal>Lorem, ipsum .</smal>
            <br />
            <smal>Lorem, dolor.</smal>
            <br />
          </Col>
          <Col lg="3" md="6" xs="12" className="mt-5">
            <h6>Get to Know Us</h6>
            <smal>Lorem, ipsum dolor.</smal>
            <br />
            <smal>Lorem, ipsum .</smal>
            <br />
            <smal>Lorem, dolor.</smal>
            <br />
          </Col>
        </Row>
        <br />
        <br />
      </Container>
      <hr />
      <Container>
        <Row>
          <div className="f-between">
            <h3>Brand</h3>
            <div>
              <img
                src="https://img.icons8.com/fluency/28/null/credit-card-front.png"
                alt="credit card"
              />{' '}
              <img
                src="https://img.icons8.com/fluency/28/null/credit-card-front.png"
                alt="credit card"
              />
            </div>
          </div>
        </Row>
      </Container>
      <br />
      <Container className='f-between'>
        <small>All right recieved 2023</small>
        <small>A Lxiyas product</small>
      </Container>
    </div>
  )
}

export default Footer
