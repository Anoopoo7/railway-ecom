import Motion from '@motions/motions'
import { Button, Col, FormGroup, Input } from 'reactstrap'

const LoginForm = ({ setLogin }) => {
  return (
    <Col md="6 f-center">
      <Motion
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
      >
        <div>
          <h2 className="text-center">Login</h2>
          <br />
          <FormGroup>
            <Input
              type="email"
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
          <Button block color="success" className="mb-2">
            Submit
          </Button>
          <small className="pointer text-primary">
            <> Forget your password ?</>
          </small>
          <br />
          <small
            className="pointer text-primary"
            onClick={() => setLogin((prev) => !prev)}
          >
            <> don  t have an account ?</>
          </small>
        </div>
      </Motion>
    </Col>
  )
}

export default LoginForm
