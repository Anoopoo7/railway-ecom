/* eslint-disable @next/next/no-img-element */

import Motion from '@motions/motions'
import { useState } from 'react'
import { Card, Col } from 'reactstrap'

const ProductGalery = ({ wishlisted, pictures }) => {
  const [wishlist, setWishlist] = useState(wishlisted)
  const [activePic, setActivepic] = useState(pictures && pictures[0])
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
          <img className="img-fluid p-3 image-pdp" src={activePic} alt="" />
        </div>
      </Motion>
      <div className="carosel-outer">
        <div className="carosel-innner">
          {pictures &&
            pictures.map((each, i) => (
              <Card
                key={i}
                className="p-2 m-2 min-width f-center pointer"
                onClick={() => setActivepic(each)}
              >
                <img src={each} width={50} alt="" />
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductGalery
