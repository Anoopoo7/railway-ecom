import { Card } from 'reactstrap'

const AddressList = ({ setAddressForm }) => {
  return (
    <>
      <Card className="p-3 mt-1 m-md-4 pointer">
        <div className="ms-3">
          <br />
          <small>
            <b>Address 1: </b>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
            ipsum.
          </small>
          <br />
          <small>
            <b>City : </b>
            trivandrum
          </small>
          <br />
          <small>
            <b>State : </b>
            Kerala
          </small>
          <br />
          <small>
            <b> Phone:</b> +91 98789877
          </small>
        </div>
      </Card>
      <Card className="p-3 mt-1 m-md-4 pointer">
        <div className="ms-3">
          <br />
          <small>
            <b>Address 1: </b>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
            ipsum.
          </small>
          <br />
          <small>
            <b>City : </b>
            trivandrum
          </small>
          <br />
          <small>
            <b>State : </b>
            Kerala
          </small>
          <br />
          <small>
            <b> Phone:</b> +91 98789877
          </small>
        </div>
      </Card>
      <Card
        className="p-3 mt-1 m-md-4 text-center pointer"
        onClick={() => setAddressForm(true)}
      >
        Add New +
      </Card>
    </>
  )
}

export default AddressList
