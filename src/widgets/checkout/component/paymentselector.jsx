import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  Label,
  UncontrolledCollapse,
} from 'reactstrap'

const PaymentSelector = () => {
  return (
    <>
      <Card className="mb-2">
        <Button color="light p-3" id="toggler">
          <div className="f-between">
            <b>Payment Options</b>
            {/* <img src="https://img.icons8.com/material/24/null/expand-arrow--v1.png" /> */}
            <img src="https://img.icons8.com/fluency/24/null/checked.png" />
          </div>
        </Button>
      </Card>
      <UncontrolledCollapse
        className="mb-2"
        defaultOpen={false}
        toggler="#toggler"
      >
        <Card>
          <CardBody>
            <div className="mt-3 ms-md-3">
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
            </div>
            <br />
            <hr />
            <div className="ms-md-3">
              <small className='text-muted'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores magnam accusamus obcaecati, culpa ullam aliquid
                perferendis fugit maxime voluptates ipsa officiis, sint quidem
                ea voluptate mollitia quisquam ut officia vel in non corrupti
                sapiente explicabo eveniet suscipit? Suscipit veniam voluptate,
                temporibus dolorem cum iure earum pariatur possimus a,
                cupiditate molestiae iste blanditiis neque facere similique?
              </small>
            </div>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </>
  )
}

export default PaymentSelector
