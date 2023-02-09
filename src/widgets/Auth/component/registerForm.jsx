import Motion from '@motions/motions'
import { Button, Col, FormGroup, Input } from 'reactstrap'

const RegisterForm = ({ setLogin }) => {
  return (
    <Col md="6 f-center">
      <Motion
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
      >
        <h2 className="text-center">Register</h2>
        <br />
        <FormGroup>
          <Input type="text" valid={false} invalid={false} placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            valid={false}
            invalid={false}
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            valid={false}
            invalid={false}
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            valid={false}
            invalid={false}
            placeholder="Confirm Password"
          />
        </FormGroup>
        <Button block color="success" className="mb-2">
          Submit
        </Button>
        <small
          className="pointer text-primary"
          onClick={() => setLogin((prev) => !prev)}
        >
          <> If you already have an account ?</>
        </small>
      </Motion>
    </Col>
  )
}

export default RegisterForm
