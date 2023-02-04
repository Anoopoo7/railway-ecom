import PlpContainer from '@widgets/PLP/container/plpContainer'

export async function getStaticPaths() {
  return {
    paths: [{ params: { listdata: 'product-list' } }],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  return {
    props: { type: 'product' },
  }
}

const ListView = ({ type }) => {
  return <PlpContainer />
}

export default ListView
