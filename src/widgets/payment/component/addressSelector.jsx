import { Button, Card, Col, FormGroup, Input, Label, Row } from 'reactstrap'

const AddressSelector = ({ setSavedAddress }) => {
  return (
    <Row>
      <Col md="6">
        <div className="f-between mt-5">
          <h4>Select Address</h4>
          <Button onClick={() => setSavedAddress(false)}>New</Button>
        </div>
        <br />
        <Col className="pointer">
          <div
            className="text-left p-3"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.175)',
              borderRadius: '6px',
            }}
          >
            <h5>name</h5>
            <small>email@email.com</small>
            <br />
            <small>913425365</small>
            <br />
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              reprehenderit. Ea distinctio ullam, qui, incidunt eveniet alias
              aperiam velit, tempora illo rerum esse? Corrupti vero excepturi in
              officiis est? Dolorem.
            </small>
            <br />
            <small>PIN: 556432</small>
          </div>
        </Col>
        <Col className="mt-3 pointer">
          <div
            className="text-left p-3"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.175)',
              borderRadius: '6px',
            }}
          >
            <h5>name</h5>
            <small>email@email.com</small>
            <br />
            <small>913425365</small>
            <br />
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              reprehenderit. Ea distinctio ullam, qui, incidunt eveniet alias
              aperiam velit, tempora illo rerum esse? Corrupti vero excepturi in
              officiis est? Dolorem.
            </small>
            <br />
            <small>PIN: 556432</small>
          </div>
        </Col>
      </Col>
      <Col md="6" className="mt-3 mt-md-5">
        <Card className="mt-md-5 p-3">
          <small>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur asperiores, doloremque nobis tempore voluptates hic quam
            amet laborum nostrum ad sed ab molestias ratione minima recusandae
            explicabo, assumenda odio magnam modi doloribus aliquam!
          </small>
          <br />
          <div>
            <h4>Payment Options</h4>
            <FormGroup check>
              <Input name="radio2" type="radio" />{' '}
              <Label check>Cash on Delivery</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio2" type="radio" />{' '}
              <Label check>Credit Card</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio2" type="radio" /> <Label check>UPI</Label>
            </FormGroup>
            <Card className="mt-3">
              <Button color="success">Place Order</Button>
            </Card>
          </div>
          <br />
          <br />
          <Card />
          <small className="text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            nemo, iste eius quidem incidunt qui iusto nisi. Excepturi modi eius
            soluta corrupti fugiat optio deserunt eum eveniet esse, repellat
            facilis.
          </small>
        </Card>
      </Col>
    </Row>
  )
}

export default AddressSelector
