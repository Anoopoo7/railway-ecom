import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap'

const AddressForm = ({ setAddressForm }) => {
  return (
    <>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">First Name</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter name"
              type="email"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Last Name</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter lastname"
              type="password"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="enter email"
              type="email"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Phone No</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="enter phone no"
              type="password"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleAddress">Address Line 1</Label>
            <Input
              id="exampleAddress"
              name="address"
              type="textarea"
              placeholder="enter address"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleAddress2">Address Line 2</Label>
            <Input
              id="exampleAddress2"
              name="address2"
              type="textarea"
              placeholder="enter address (optional)"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input id="exampleCity" name="city" placeholder="enter city" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input id="exampleState" name="state" placeholder="enter state" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">PIN code</Label>
            <Input id="exampleZip" name="pin" placeholder="enter pincode" />
          </FormGroup>
        </Col>
        <div className="mt-3 d-flex justify-content-end">
          <i className="btn ps-2 pe-2 pointer m-1" onClick={()=>setAddressForm(false)}>Cancel</i>
          <Button className="ps-3 pe-3 m-1" color="primary">
            Add Address
          </Button>
        </div>
      </Row>
    </>
  )
}

export default AddressForm
