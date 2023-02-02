import HorizondalStaticBanner from '@/widgets/common/horizondalStaticbanner'
import { Col, Container, Row } from 'reactstrap'
import HeroBanner from '../component/heroBanner'
import ProductCarosal from '../component/productCarosel'

const HomePageLayout = () => {
  return (
    <Container>
      <HeroBanner />
      <ProductCarosal />
      <HorizondalStaticBanner/>
      <ProductCarosal />
    </Container>
  )
}

export default HomePageLayout
