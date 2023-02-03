/* eslint-disable @next/next/no-img-element */
import { Card, Col, Row } from 'reactstrap'

const HorizondalStaticBanner = ({ type }) => {
  return (
    <>
      {type === 'single' ? (
        <Row className="m-1">
          <Card>
            <img
              src="https://as2.ftcdn.net/v2/jpg/05/00/17/35/1000_F_500173592_xkYJkw6PkD7NRk0iLRzbyhu96n3SFF6m.jpg"
              alt="banner"
              className="w-100"
            />
          </Card>
        </Row>
      ) : (
        <>
          <Row className="m-1">
            <Col lg="6">
              <Card className="m-1">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/05/00/17/35/1000_F_500173592_xkYJkw6PkD7NRk0iLRzbyhu96n3SFF6m.jpg"
                  alt="banner"
                  className="w-100"
                />
              </Card>
            </Col>
            <Col lg="6">
              <Card className="m-1">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/05/00/17/35/1000_F_500173592_xkYJkw6PkD7NRk0iLRzbyhu96n3SFF6m.jpg"
                  alt="banner"
                  className="w-100"
                />
              </Card>
            </Col>
          </Row>
          <Row className="m-1">
            <Col lg="6">
              <Card className="m-1">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/05/00/17/35/1000_F_500173592_xkYJkw6PkD7NRk0iLRzbyhu96n3SFF6m.jpg"
                  alt="banner"
                  className="w-100"
                />
              </Card>
            </Col>
            <Col lg="6">
              <Card className="m-1">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/05/00/17/35/1000_F_500173592_xkYJkw6PkD7NRk0iLRzbyhu96n3SFF6m.jpg"
                  alt="banner"
                  className="w-100"
                />
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default HorizondalStaticBanner
