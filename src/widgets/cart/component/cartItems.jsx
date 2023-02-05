/* eslint-disable @next/next/no-img-element */
import Quantity from '@/widgets/product/componet/quantity'
import { Card } from 'reactstrap'

const CartItems = () => {
  return (
    <>
      <Card className="shadoww p-3 mb-2">
        <h4>My cart</h4>
      </Card>
      <Card className="shadoww p-3 p-lg-5 mb-2">
        <br />
        <div className="d-flex">
          <div className="me-3">
            <img
              src="https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg"
              alt="image"
              width={130}
              className="cart-img img-fluid"
            />
          </div>
          <div className="f-center-vertical">
            <h6 className="text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h6>
            <div className="d-flex align-items-center">
              <h5>₹ 4,500</h5>
              <small className="text-success ms-2 pointer">
                <i> 56% OFF</i>
              </small>
            </div>
            <table>
              <tr>
                <td>
                  <Quantity />
                </td>
                <td>
                  <Quantity />
                </td>
              </tr>
            </table>
            <small className="pointer">remove</small>
            <small className="pointer">move to wishlist</small>
          </div>
        </div>
      </Card>
      <Card className="shadoww p-3 p-lg-5 mb-2">
        <br />
        <div className="d-flex">
          <div className="me-3">
            <img
              src="https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg"
              alt="image"
              width={130}
              className="cart-img img-fluid"
            />
          </div>
          <div className="f-center-vertical">
            <h6 className="text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h6>
            <div className="d-flex align-items-center">
              <h5>₹ 4,500</h5>
              <small className="text-success ms-2 pointer">
                <i> 56% OFF</i>
              </small>
            </div>
            <table>
              <tr>
                <td>
                  <Quantity />
                </td>
                <td>
                  <Quantity />
                </td>
              </tr>
            </table>
            <small className="pointer">remove</small>
            <small className="pointer">move to wishlist</small>
          </div>
        </div>
      </Card>
    </>
  )
}

export default CartItems
