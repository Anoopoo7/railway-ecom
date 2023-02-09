/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import AuthImage from '../component/AuthImage'
import LoginForm from '../component/loginForm'
import RegisterForm from '../component/registerForm'

const AuthLayout = () => {
  const [login, setLogin] = useState(true)
  return (
    <Container>
      <Row style={{ minHeight: '80vh' }}>
        <AuthImage />
        {login ? (
          <LoginForm setLogin={setLogin} />
        ) : (
          <RegisterForm setLogin={setLogin} />
        )}
      </Row>
    </Container>
  )
}

export default AuthLayout
