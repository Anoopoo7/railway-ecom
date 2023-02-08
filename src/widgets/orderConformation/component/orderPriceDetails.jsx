import { Card } from 'reactstrap'

const OrderPriceDetails = () => {
  return (
    <Card className="p-2 mb-2">
      <div className="f-between">
        <b> #UAODR46461</b>
        <b>12.02.2023</b>
      </div>
      <hr />
      <div className="f-between">
        <p>Subtotal</p>
        <p>14,000</p>
      </div>
      <div className="f-between">
        <p>Delivery cost</p>
        <p>199</p>
      </div>
      <div className="f-between">
        <h>Discount</h>
        <h>3,000</h>
      </div>
      <hr />
      <div className="f-between">
        <b>Order Total</b>
        <b>11,000</b>
      </div>
    </Card>
  )
}

export default OrderPriceDetails
