import Motion from '@/motions/motions'
import { Button, Card, Col, Row } from 'reactstrap'
import Quantity from './quantity'
import Selector from './selector'

const PDP = () => {
  return (
    <>
      <small className="text-danger pointer">PKEY: ASERFT3E5600</small>
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
        <h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          recusandae nisi saepe!
        </h4>
        <br />
        <div>
          <b>Options:</b>
          <Selector />
        </div>
        <br />
        <div className="d-flex align-items-center">
          <h3>₹ 4,500</h3>
          <small className="text-success ms-2 pointer"><i> 56% OFF</i></small>
        </div>
        <br />
        <h6>Available offers:</h6>
        <div>
          <img src="https://img.icons8.com/plasticine/25/null/tag-window.png" />{' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,
          <br />
          <img src="https://img.icons8.com/plasticine/25/null/tag-window.png" />{' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,
          <br />
          <img src="https://img.icons8.com/plasticine/25/null/tag-window.png" />{' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,
          <br />
          <img src="https://img.icons8.com/plasticine/25/null/tag-window.png" />{' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,
          <br />
          <img src="https://img.icons8.com/plasticine/25/null/tag-window.png" />{' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,
        </div>
        <br />
        <Row className='f-start mt-5 mb-5'>
          <Col xs="3">
            <Quantity />
          </Col>
          <Col xs="9">
            <Card className='mb-1'>
              <Button color='success' className='p-2'>Add to Cart</Button>
            </Card>
          </Col>
        </Row>
      </Motion>
    </>
  )
}

export default PDP
