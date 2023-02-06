import Motion from '@motions/motions'
import HomePageContainer from '@widgets/home/container/homePageContainer'
import { homePageData } from '@services/homePageServices'

export async function getStaticProps(ctx) {
  const res = await homePageData()
  return {
    props: { res },
  }
}

export default function Home({ res }) {
  return (
    <Motion>
      <HomePageContainer res={res} />
    </Motion>
  )
}
