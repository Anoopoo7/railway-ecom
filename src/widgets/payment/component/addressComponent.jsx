import {
  Button,
  Card,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap'

const AddressComponent = ({ setSavedAddress }) => {
  return (
    <Card className="shadoww mt-4 p-4">
      <h5> Address address</h5>
      <br />
      <br />
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
        </Row>
        <FormGroup check>
          <Input id="exampleCheck" name="check" type="checkbox" />
          <Label check for="exampleCheck">
            save address
          </Label>
        </FormGroup>
        <div className="mt-4 ms-auto">
          <i className="m-5" onClick={() => setSavedAddress(true)}>
            Cancel
          </i>
          <Button className="ps-3 pe-3 m-1">Add Address</Button>
        </div>
      </>
    </Card>
  )
}

export default AddressComponent
