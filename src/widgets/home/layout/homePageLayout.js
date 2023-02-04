import HorizondalStaticBanner from '@widgets/common/horizondalStaticbanner'
import TabSwitcher from '@widgets/common/tabSwitcher'
import { useState } from 'react'
import { Container } from 'reactstrap'
import HeroBanner from '../component/heroBanner'
import ScrollCarosal from '../component/scrollCarosal'

const HomePageLayout = () => {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <Container>
      <HeroBanner />
      <ScrollCarosal />
      <ScrollCarosal type={'product'} />
      <HorizondalStaticBanner type={'single'} />
      <ScrollCarosal type={'product'} />
      <HorizondalStaticBanner type={'duel'} />
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollCarosal type={'product'} hideTitle={true} />
    </Container>
  )
}

export default HomePageLayout
