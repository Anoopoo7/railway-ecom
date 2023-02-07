import { useState } from 'react'
import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap'
import AddressForm from './addressForm'
import AddressList from './addressLists'

const Addresshandler = () => {
  const [addressForm, setAddressForm] = useState(true)
  return (
    <>
      <Card className="mb-2">
        <Button color="light p-3" id="toggler">
          <div className="f-between">
            <b>Add Address</b>
            {/* <img src="https://img.icons8.com/material/24/null/expand-arrow--v1.png" /> */}
            <img src="https://img.icons8.com/fluency/24/null/checked.png"/>
          </div>
        </Button>
      </Card>
      <UncontrolledCollapse
        className="mb-2"
        defaultOpen={true}
        toggler="#toggler"
      >
        <Card>
          <CardBody>
            {addressForm ? (
              <AddressForm setAddressForm={setAddressForm} />
            ) : (
              <AddressList setAddressForm={setAddressForm} />
            )}
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </>
  )
}

export default Addresshandler
