import HorizondalStaticBanner from '@/widgets/common/horizondalStaticbanner'
import { Container } from 'reactstrap'
import HeroBanner from '../component/heroBanner'
import ScrollCarosal from '../component/scrollCarosal'

const HomePageLayout = () => {
  return (
    <Container>
      <HeroBanner />
      <ScrollCarosal />
      <ScrollCarosal type={'product'} />
      <HorizondalStaticBanner />
      <ScrollCarosal type={'product'} />
    </Container>
  )
}

export default HomePageLayout
