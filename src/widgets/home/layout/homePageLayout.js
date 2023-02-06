import HorizondalStaticBanner from '@widgets/common/horizondalStaticbanner'
import TabSwitcher from '@widgets/common/tabSwitcher'
import { useState } from 'react'
import { Container } from 'reactstrap'
import HeroBanner from '../component/heroBanner'
import ScrollCarosal from '../component/scrollCarosal'

const HomePageLayout = ({ res }) => {
  const [activeTab, setActiveTab] = useState(0)
  const {
    hero_banner,
    category_carosal,
    product_carosal_one,
    single_banner,
    product_carosal_two,
    Quater_banner,
    tab_switcher,
  } = res || {}
  const { items } = tab_switcher || {}
  return (
    <Container>
      <HeroBanner bannerDetails={hero_banner} />
      <ScrollCarosal carosalDetails={category_carosal} />
      <ScrollCarosal type={'product'} carosalDetails={product_carosal_one} />
      <HorizondalStaticBanner type={'single'} bannerDetails={single_banner} />
      <ScrollCarosal type={'product'} carosalDetails={product_carosal_two} />
      <HorizondalStaticBanner bannerDetails={Quater_banner} />
      <TabSwitcher
        tabDetails={items?.map((i) => i.title)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ScrollCarosal
        type={'product'}
        hideTitle={true}
        carosalDetails={items[activeTab]?.items}
      />
    </Container>
  )
}

export default HomePageLayout
