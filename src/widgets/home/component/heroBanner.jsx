import { UncontrolledCarousel } from 'reactstrap'

const HeroBanner = () => {
  return (
    <UncontrolledCarousel
      className="mt-5 mb-5"
      items={[
        {
          key: 1,
          src:
            'https://as2.ftcdn.net/v2/jpg/05/00/17/35/1000_F_500173592_xkYJkw6PkD7NRk0iLRzbyhu96n3SFF6m.jpg',
        },
        {
          key: 2,
          src:
            'https://as2.ftcdn.net/v2/jpg/05/00/17/35/1000_F_500173589_ApB8UyyuS13bnTEGeWRiXXH1uruZhrRQ.jpg',
        },
        {
          key: 3,
          src:
            'https://as2.ftcdn.net/v2/jpg/05/00/17/35/1000_F_500173591_S6XV4XMAeJ5j5EPlZPL3Vv44x3HpZ2yG.jpg',
        },
        {
          key: 4,
          src:
            'https://as2.ftcdn.net/v2/jpg/05/00/17/35/1000_F_500173589_ApB8UyyuS13bnTEGeWRiXXH1uruZhrRQ.jpg',
        },
      ]}
    />
  )
}

export default HeroBanner

// src: https://stock.adobe.com/in/search?k=online+store+banner&asset_id=500173591
