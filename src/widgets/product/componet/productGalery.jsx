/* eslint-disable @next/next/no-img-element */

import Motion from '@motions/motions'
import { useState } from 'react'
import { Card, Col } from 'reactstrap'

const ProductGalery = () => {
  const [wishlist, setWishlist] = useState(false)
  return (
    <div>
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
      <Motion
        initial={{ y: 50, transform: 'scale(0.5)', opacity: 0 }}
        animate={{ y: 0, transform: 'scale(1)', opacity: 1 }}
      >
        <div className="f-center">
          <img
            className="img-fluid p-3 image-pdp"
            src="https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg"
            alt=""
          />
        </div>
      </Motion>
      <div className="carosel-outer">
        <div className="carosel-innner">
          <Card className="p-2 m-2 min-width f-center pointer">
            <img
              src="https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg"
              width={50}
              alt=""
            />
          </Card>
          <Card className="p-2 m-2 min-width f-center pointer">
            <img
              src="https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg"
              width={50}
              alt=""
            />
          </Card>
          <Card className="p-2 m-2 min-width f-center pointer">
            <img
              src="https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg"
              width={50}
              alt=""
            />
          </Card>
          <Card className="p-2 m-2 min-width f-center pointer">
            <img
              src="https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg"
              width={50}
              alt=""
            />
          </Card>
          <Card className="p-2 m-2 min-width f-center pointer">
            <img
              src="https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg"
              width={50}
              alt=""
            />
          </Card>
          <Card className="p-2 m-2 min-width f-center pointer">
            <img
              src="https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg"
              width={50}
              alt=""
            />
          </Card>
          <Card className="p-2 m-2 min-width f-center pointer">
            <img
              src="https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg"
              width={50}
              alt=""
            />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProductGalery
