import { UncontrolledCarousel } from 'reactstrap'

const HeroBanner = () => {
  return (
    <UncontrolledCarousel
      className="mt-5 mb-5"
      items={[
        {
          key: 1,
          src: '/images/banne1.jpg',
        },
        {
          key: 2,
          src:
            '/images/banner4.jpg',
        },
        {
          key: 3,
          src:
            '/images/banner3.jpg',
        }
      ]}
    />
  )
}

export default HeroBanner

// src: https://stock.adobe.com/in/search?k=online+store+banner&asset_id=500173591
