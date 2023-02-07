import { useRouter } from 'next/router'
import { Button, Card } from 'reactstrap'

const FinalPriceView = () => {
  const router = useRouter()
  return (
    <Card className="p-3">
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
      <hr />
      <div className="f-between">
        <span>Grand Total</span>
        <span>10,200</span>
      </div>
      <br />
      <Button color="success" onClick={() => router.push('/order-confirm')}>
        Place order
      </Button>
    </Card>
  )
}

export default FinalPriceView
