/* eslint-disable @next/next/no-img-element */
import Motion from '@/motions/motions'
import { useState } from 'react'
import { Button, Card } from 'reactstrap'

const ProductCard = () => {
  const [wishlist, setWishlist] = useState(false)
  return (
    <Motion>
      <Card className="product-card-outer me-3">
        {wishlist ? (
          <Motion
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <img
              src="https://img.icons8.com/emoji/200/null/sparkling-heart.png"
              className="prod-heart"
              alt="wishlisted"
              onClick={() => setWishlist((prev) => !prev)}
            />
          </Motion>
        ) : (
          <img
            src="https://img.icons8.com/emoji/200/null/black-heart.png"
            className="prod-heart"
            alt="unWishlisted"
            onClick={() => setWishlist((prev) => !prev)}
          />
        )}
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
          <Button className="mb-2 bt btn-warning n f-center">
            <img src="https://img.icons8.com/tiny-glyph/16/null/shopping-cart.png" />
          </Button>
        </div>
      </Card>
    </Motion>
  )
}

export default ProductCard
