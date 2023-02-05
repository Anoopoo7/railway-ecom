import { useState } from 'react'
import AddressComponent from '../component/addressComponent'
import AddressSelector from '../component/addressSelector'

const { Container } = require('reactstrap')

const PaymentLayout = () => {
  const [savedAddress, setSavedAddress] = useState(true)
  return (
    <Container>
      {savedAddress ? (
        <AddressSelector setSavedAddress={setSavedAddress} />
      ) : (
        <AddressComponent setSavedAddress={setSavedAddress} />
      )}
    </Container>
  )
}

export default PaymentLayout
