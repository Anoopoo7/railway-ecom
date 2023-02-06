import Modal from '@/widgets/common/modal'
import Motion from '@motions/motions'
import { Button, Card, Col, Row } from 'reactstrap'
import Quantity from './quantity'
import Selector from './selector'

const PDP = ({
  addtoCart,
  offers,
  name,
  varient,
  price,
  quantity,
  off,
  pkey,
  varients,
  changeVarient,
}) => {
  return (
    <>
      <small className="text-danger pointer">PKEY: {pkey}</small>
      <Motion
        initial={{
          transform: 'scale(0.5)',
          opacity: 0,
        }}
        animate={{
          transform: 'scale(1)',
          opacity: 1,
        }}
      >
        <h4>{name}</h4>
        <br />
        <div>
          <b>Options:</b>
          <Selector
            varients={varients}
            varient={varient}
            changeVarient={changeVarient}
          />
        </div>
        <br />
        <div className="d-flex align-items-center">
          <h3>₹ {price}</h3>
          <small className="text-success ms-2 pointer">
            <i> {off}% OFF</i>
          </small>
        </div>
        <br />
        <h6>Available offers:</h6>
        <div>
          {offers &&
            Array.isArray(offers) &&
            offers.map((each, i) => (
              <>
                <img
                  key={i}
                  src="https://img.icons8.com/plasticine/25/null/tag-window.png"
                />{' '}
                {each}
                <br />
              </>
            ))}
        </div>
        <br />
        <Row className="f-start mt-5 mb-5">
          <Col xs="3">
            <Quantity quantity={quantity} />
          </Col>
          <Col xs="9">
            <Card className="mb-1">
              <Button color="success" className="p-2" onClick={addtoCart}>
                Add to Cart
              </Button>
            </Card>
          </Col>
        </Row>
      </Motion>
    </>
  )
}

export default PDP
