import { useRouter } from 'next/router'
import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap'

const PriceView = () => {
  const router = useRouter()
  return (
    <Card className="shadoww mt-2 p-3">
      <Card className="p-2">
        <h5 className="text-center">Coupon</h5>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          maxime ex repudiandae mollitia, debitis, ipsum doloremque, dolor neque
          esse dolore ipsa iusto distinctio? Quisquam alias nisi enim. Aut odio
          fugiat explicabo excepturi dolorum.
        </small>
        <div class="input-group mt-3 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Coupon code"
            aria-label="Coupon code"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Apply
            </button>
          </div>
        </div>
      </Card>
      <br />
      <div className="f-between">
        <span>Subtotal</span>
        <span>14,000</span>
      </div>
      <div className="f-between">
        <span>Offer</span>
        <span>2,000</span>
      </div>
      <div className="f-between">
        <span>Discount</span>
        <span>2,000</span>
      </div>
      <div className="f-between">
        <span>Delivery</span>
        <span>200</span>
      </div>
      <br />
      <Card></Card>
      <br />
      <div className="f-between">
        <span>Grand Total</span>
        <span>10,200</span>
      </div>
      <br />
      <Button color="success" onClick={() => router.push('/payment')}>
        Checkout
      </Button>
    </Card>
  )
}

export default PriceView
