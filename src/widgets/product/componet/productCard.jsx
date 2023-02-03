/* eslint-disable @next/next/no-img-element */
import Motion from '@/motions/motions'
import Image from 'next/image'
import { Button, Card } from 'reactstrap'

const ProductCard = () => {
  return (
    <Motion>
      <Card className="product-card-outer me-3">
        <div className="f-center">
          <img
            src="https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg"
            alt="image"
            width={120}
          />
        </div>
        <h6 className="text-justify">Wireless Bluetooth Over The Ear ...</h6>
        <br />
        <div className="f-between">
          <h6>Rs.12,000</h6>
          <Button className="mb-2 btn-success">cart</Button>
        </div>
      </Card>
    </Motion>
  )
}

export default ProductCard
